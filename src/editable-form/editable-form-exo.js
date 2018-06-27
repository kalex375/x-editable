/*
Editableform based on Twitter Bootstrap 3
*/
(function ($) {
    "use strict";
    
    //store parent methods
    var pInitInput = $.fn.editableform.Constructor.prototype.initInput;
    
    $.extend($.fn.editableform.Constructor.prototype, {
        initTemplate: function() {
            this.$form = $($.fn.editableform.template); 
            this.$form.find('.control-group').addClass('exo-form-group');
            this.$form.find('.editable-error-block').addClass('exo-help-block');
        },
        initInput: function() {  
            pInitInput.apply(this);

            //for bs3 set default class `input-sm` to standard inputs
            var emptyInputClass = this.input.options.inputclass === null || this.input.options.inputclass === false;
            var defaultClass = 'exo-input-sm';
            
            //bs3 add `form-control` class to standard inputs
            var stdtypes = 'text,select,textarea,password,email,url,tel,number,range,time,typeaheadjs'.split(','); 
            if(~$.inArray(this.input.type, stdtypes)) {
                this.input.$input.addClass('exo-form-control');
                if(emptyInputClass) {
                    this.input.options.inputclass = defaultClass;
                    this.input.$input.addClass(defaultClass);
                }
            }             
        
            //apply bs3 size class also to buttons (to fit size of control)
            var $btn = this.$form.find('.editable-buttons');
            var classes = emptyInputClass ? [defaultClass] : this.input.options.inputclass.split(' ');
            for(var i=0; i<classes.length; i++) {
                // `btn-sm` is default now
                /*
                if(classes[i].toLowerCase() === 'input-sm') { 
                    $btn.find('button').addClass('btn-sm');  
                }
                */
                if(classes[i].toLowerCase() === 'exo-input-lg') {
                    $btn.find('button').removeClass('exo-btn-sm').addClass('exo-btn-lg');
                }
            }
        }
    });    
    
    //buttons
    $.fn.editableform.buttons = 
      '<button type="submit" class="exo-btn exo-btn-primary exo-btn-sm editable-submit">'+
        '<i class="glyphicon glyphicon-ok"></i>'+
      '</button>'+
      '<button type="button" class="exo-btn exo-btn-default exo-btn-sm editable-cancel">'+
        '<i class="glyphicon glyphicon-remove"></i>'+
      '</button>';         
    
    //error classes
    $.fn.editableform.errorGroupClass = 'exo-has-error';
    $.fn.editableform.errorBlockClass = null;  
    //engine
    $.fn.editableform.engine = 'bs3';  
}(window.jQuery));