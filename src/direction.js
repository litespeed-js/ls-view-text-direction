(function (window) {
    "use strict";

    window.ls.view.add(
        {
            selector: 'data-ls-text-direction',
            repeat: false,
            controller: function(element) {
                let special = ['\n',' ', '״', '"', '_', '\'', '!', '@', '#', '$', '^', '&', '%', '*', '(', ')', '+', '=', '-', '[', ']', '\\', '/', '{', '}', '|', ':', '<', '>', '?', ',', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                let isRTL = function(s) {
                    let ltrChars = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' + '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
                        rtlChars = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
                        rtlDirCheck = new RegExp('^[^' + ltrChars + ']*[' + rtlChars + ']');

                    return rtlDirCheck.test(s);
                };

                let setDirection = function() {
                    let value       = (element.value[0]) ? element.value : '';
                    let direction	= 'ltr';
                    let align		= 'left';
                    let firstChar   = null;

                    for (let i = 0; i < value.length; i++) {
                        if (-1 === special.indexOf(value[i])) {
                            firstChar = value[i];
                            break;
                        }
                    }

                    if (isRTL(firstChar)) {
                        direction	= 'rtl';
                        align		= 'right';
                    }

                    element.style.direction = direction;
                    element.style.textAlign = align;
                };

                element.addEventListener('keyup',   setDirection);
                element.addEventListener('change',  setDirection);
                element.addEventListener('cut',     setDirection);
                element.addEventListener('paste',   setDirection);
                element.addEventListener('drop',    setDirection);

                setDirection();
            }
        }
    );

})(window);