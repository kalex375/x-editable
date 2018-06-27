/**
 * Editable Inline
 * ---------------------
 */
(function ($) {
    "use strict";

    //copy prototype from EditableContainer
    //extend methods
    $.extend($.fn.editableContainer.Exobar.prototype, $.fn.editableContainer.Popup.prototype, {
        containerName: 'editableform',
        innerCss: '.editable-exobar',
        containerClass: 'editable-container editable-exobar', //css class applied to container element

        initContainer: function () {
            //container is <span> element
            this.$tip = $('<span></span>');

            //convert anim to miliseconds (int)
            if (!this.options.anim) {
                this.options.anim = 0;
            }
        },

        splitOptions: function () {
            //all options are passed to form
            this.containerOptions = {};
            this.formOptions = this.options;
        },

        tip: function () {
            return this.$tip;
        },

        setPosition: function () {
        },

        /* show */
        innerShow: function () {
            //this.call('show');
            if ( $(this.options.formContainer).find(this.tip()).length>0) {
                this.tip().show();
            } else {
                $(this.options.formContainer).append(this.tip());
                this.tip().show();
            }
        },

        /* hide */
        innerHide: function () {
            this.$tip.hide(this.options.anim, $.proxy(function() {
                //this.$element.show();
                this.innerDestroy();
            }, this));
        },

        /* destroy */

        innerDestroy: function () {
            if (this.tip()) {
                this.tip().empty().remove();
            }
        }
    });

}(window.jQuery));