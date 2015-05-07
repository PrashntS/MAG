(function(a) {
    DM.add("menu", function() {
        window.MENU = new CLASS.sliderMenu(this.node, {})
    });
    DM.add("pager", function() {
        window.PAGER = new CLASS.sliderPager(this.node, {})
    });
    DM.add("slide", function(a) {
        SLIDER.addSlide(new SLIDE_CLASS[a](this.node, {}))
    });
    DM.add("overlay", function() {
        window.OVERLAY = new CLASS.overlay(this.node, {})
    });
    DM.add("popupFeedback", function() {
        window.POPUPS.feedback = new CLASS.popupFeedback(this.node, {})
    });
    DM.add("popupThx", function() {
        window.POPUPS.thx = new CLASS.popupThx(this.node, {})
    });
    DM.add("popupThxForMsg",
        function() {
            window.POPUPS.thxForMsg = new CLASS.popupThxForMsg(this.node, {})
        });
    DM.add("showPopup", function(c) {
        a(this.node).on("click.showPopup", function(a) {
            window.POPUPS[c].show()
        })
    });
    DM.add("go", function(c) {
        a(this.node).on("click.switchSlide", function() {
            SLIDER.goToSlide(c)
        })
    });
    DM.add("voteForm", function(a) {
        new CLASS.voteForm(this.node, {})
    });
    DM.add("shareCounter",
        function(c) {
            a(this.node).data("shareName", c);
            a(this.node).on("click.shareCounter", function() {
                var b = a(this).data("shareName"),
                    d = GET_COOKIE("shares_data"),
                    d = d ? d : "";
                0 > d.indexOf(b) && (SET_COOKIE("shares_data", d + "|" + b, {
                    expires: new Date(9999999999999)
                }), a.ajax({
                    type: "GET",
                    url: "s-c.php",
                    contentType: "application/json",
                    data: {
                        name: b
                    },
                    success: function(a) {
                        console.log(a)
                    },
                    error: function(a) {
                        console.log(a)
                    }
                }))
            })
        });
    a(function() {
        function c() {
            var b = a(window).width(),
                c = a(window).height();
            MODE_SMALL = 1200 > b || 750 > c;
            a("html")[MODE_SMALL ?
                "addClass" : "removeClass"]("mode-small")
        }
        window.POPUPS = {};
        window.SLIDER = new CLASS.sliderController;
        DM.go();
        var b = null;
        a(window).on("resize.cmaker", function() {
            clearTimeout(b);
            b = setTimeout(c, 200)
        });
        c();
        setTimeout(function() {
            SLIDER && (SLIDER.resize(), !SLIDER.checkHash() && SLIDER.goToSlide(0))
        }, 100);
        "yes" == GET_COOKIE("cmaker_show_thx_msg") && POPUPS.thx.show();
        DELETE_COOKIE("cmaker_show_thx_msg");
        a("html").addClass("browser-" + BROWSER.name);
        a("html").addClass("browser-" + BROWSER.name + "-v" + BROWSER.version)
    })
})(jQuery);