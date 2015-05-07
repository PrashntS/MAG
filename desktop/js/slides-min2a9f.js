(function(m) {
    function b() {}

    function n(a, t) {
        function f(d, c) {
            d instanceof Function && d.call(c)
        }

        function b(d, c) {
            d instanceof Function && d.call(c)
        }
        this.name = "why_circuitmaker";
        this.show = Modernizr.csstransforms ? f : b;
        this.hide = function(d, c) {
            d instanceof Function && d.call(c)
        };
        this.init(a, t)
    }

    function p(a, b) {
        function f(a, b) {
            e.css("transition", "left 600ms ease-in-out");
            g.css("transition", "left 600ms ease-in-out");
            c[0] = setTimeout(function() {
                g.fadeIn(400)
            }, 500);
            c[1] = setTimeout(function() {
                e.css("left", MODE_SMALL ?
                    "31.98%" : "26.673333%");
                g.css("left", MODE_SMALL ? "110%" : "80%")
            }, 1800);
            c[2] = setTimeout(function() {
                k.fadeIn(300)
            }, 3300);
            c[3] = setTimeout(function() {
                l.fadeIn(300)
            }, 4300);
            c[4] = setTimeout(function() {
                d();
                a instanceof Function && a.call(b)
            }, 4600)
        }

        function h(a, b) {
            c[0] = setTimeout(function() {
                g.fadeIn(400)
            }, 500);
            c[1] = setTimeout(function() {
                e.animate({
                    left: MODE_SMALL ? "31.98%" : "26.673333%"
                }, "600", "swing");
                g.animate({
                    left: MODE_SMALL ? "110%" : "80%"
                }, "600", "swing")
            }, 1800);
            c[2] = setTimeout(function() {
                k.fadeIn(300)
            }, 3300);
            c[3] = setTimeout(function() {
                l.fadeIn(300)
            }, 4300);
            c[4] = setTimeout(function() {
                d();
                a instanceof Function && a.call(b)
            }, 4600)
        }

        function d() {
            e.css("transition", "left 400ms ease-in-out");
            g.css("transition", "left 400ms ease-in-out")
        }
        var c = [];
        this.name = "remove_the_barriers";
        this.show = Modernizr.csstransforms ? f : h;
        this.hide = function(a, b) {
            for (var f = 0; f < c.length; clearTimeout(c[f++]));
            c = [];
            Modernizr.csstransforms && d();
            g.fadeOut(300);
            e.css("left", "0");
            g.css("left", MODE_SMALL ? "78%" : "53.33%");
            k.fadeOut(300);
            l.fadeOut(300);
            a instanceof Function && a.call(b)
        };
        this.init(a, b);
        var e = this.$node.find(".scheme-wrapper .scheme"),
            g = this.$node.find(".scheme-wrapper .msg-icon"),
            k = this.$node.find(".scheme-wrapper .msg-1"),
            l = this.$node.find(".scheme-wrapper .msg-2")
    }

    function q(a, b) {
        function f(a, b) {
            e.css("transition", "left 600ms ease-in-out");
            g.css("transition", "left 600ms ease-in-out");
            c[0] = setTimeout(function() {
                g.fadeIn(400)
            }, 500);
            c[1] = setTimeout(function() {
                e.css("left", MODE_SMALL ? "15.5%" : "11.98%");
                g.css("left", MODE_SMALL ? "45.5%" :
                    "41%")
            }, 1800);
            c[2] = setTimeout(function() {
                k.fadeIn(300)
            }, 3300);
            c[3] = setTimeout(function() {
                l.fadeIn(300)
            }, 4300);
            c[4] = setTimeout(function() {
                d();
                a instanceof Function && a.call(b)
            }, 4600)
        }

        function h(a, b) {
            c[0] = setTimeout(function() {
                g.fadeIn(400)
            }, 500);
            c[1] = setTimeout(function() {
                e.animate({
                    left: MODE_SMALL ? "15.5%" : "11.98%"
                }, "600", "swing");
                g.animate({
                    left: MODE_SMALL ? "45.5%" : "41%"
                }, "600", "swing")
            }, 1800);
            c[2] = setTimeout(function() {
                k.fadeIn(300)
            }, 3300);
            c[3] = setTimeout(function() {
                l.fadeIn(300)
            }, 4300);
            c[4] = setTimeout(function() {
                d();
                a instanceof Function && a.call(b)
            }, 4600)
        }

        function d() {
            e.css("transition", "left 400ms ease-in-out");
            g.css("transition", "left 400ms ease-in-out")
        }
        var c = [];
        this.name = "free_and_extendable";
        this.show = Modernizr.csstransforms ? f : h;
        this.hide = function(a, b, f) {
            for (a = 0; a < c.length; clearTimeout(c[a++]));
            c = [];
            Modernizr.csstransforms && d();
            g.fadeOut(300);
            e.css("left", "0");
            g.css("left", MODE_SMALL ? "30%" : "29.3%");
            k.fadeOut(300);
            l.fadeOut(300);
            b instanceof Function && b.call(f)
        };
        this.init(a, b);
        var e = this.$node.find(".scheme-wrapper .scheme"),
            g = this.$node.find(".scheme-wrapper .msg-icon"),
            k = this.$node.find(".scheme-wrapper .msg-1"),
            l = this.$node.find(".scheme-wrapper .msg-2")
    }

    function r(a, b) {
        function f(a, b) {
            e.css("transition", "top 800ms ease-in-out, opacity 800ms ease-in-out");
            c[0] = setTimeout(function() {
                e.css("opacity", "1");
                e.css("top", "30%")
            }, 500);
            c[1] = setTimeout(function() {
                d();
                a instanceof Function && a.call(b)
            }, 1300)
        }

        function h(a, b) {
            c[0] = setTimeout(function() {
                e.fadeIn(600);
                e.animate({
                    top: "30%"
                }, "600", "swing")
            }, 500);
            c[1] = setTimeout(function() {
                d();
                a instanceof Function && a.call(b)
            }, 1300)
        }

        function d() {
            e.css("transition", "top 400ms ease-in-out, opacity 400ms ease-in-out")
        }
        var c = [];
        this.name = "bring_your_ideas_to_life";
        this.show = Modernizr.csstransforms ? f : h;
        this.hide = function(a, b, f) {
            for (a = 0; a < c.length; clearTimeout(c[a++]));
            c = [];
            Modernizr.csstransforms ? (d(), e.css("opacity", "0")) : e.css("display", "none");
            e.css("top", "0");
            b instanceof Function && b.call(f)
        };
        this.init(a, b);
        var e = this.$node.find(".scheme-wrapper .scheme")
    }

    function s(a, b) {
        function f(a, b) {
            d ||
                (addFLOOD_LIGHT_TAGGING_FOR_FORM_PAGE(), d = !0);
            c.fadeIn(500);
            a instanceof Function && a.call(b)
        }

        function h(a, b) {
            d || (addFLOOD_LIGHT_TAGGING_FOR_FORM_PAGE(), d = !0);
            c.show();
            a instanceof Function && a.call(b)
        }
        var d = !1;
        this.name = "make_things_happen";
        this.show = Modernizr.csstransforms ? f : h;
        this.hide = function(a, b, d) {
            c.fadeOut(0);
            b instanceof Function && b.call(d)
        };
        this.init(a, b);
        var c = m(".last-slide-image")
    }
    SLIDE_CLASS = {
        why_circuitmaker: n,
        remove_the_barriers: p,
        free_and_extendable: q,
        bring_your_ideas_to_life: r,
        make_things_happen: s
    };
    b.prototype.name = "noname";
    b.prototype.addTransition = function(a, b, f) {
        a[0].style[PREFIX_JS + "Transition"] = b + " " + f + "ms";
        a[0].style.transition = b + " " + f + "ms"
    };
    b.prototype.removeTransition = function(a) {
        a.css(PREFIX_CSS + "transition", "none");
        a.css("transition", "none")
    };
    b.prototype.activate = function(a) {
        this.$node.css({
            visibility: "visible"
        })
    };
    b.prototype.deactivate = function(a) {
        this.$node.css({
            visibility: "hidden"
        })
    };
    b.prototype.init = function(a, b) {
        this.$node = m(a);
        this.$bgImage = this.$node.find(".bg");
        this.$content =
            this.$node.find(".content")
    };
    n.prototype = b.prototype;
    p.prototype = b.prototype;
    q.prototype = b.prototype;
    r.prototype = b.prototype;
    s.prototype = b.prototype
})(jQuery);