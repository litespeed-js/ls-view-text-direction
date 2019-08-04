// __tests__/displayUser-test.js
'use strict';

require('litespeed.js');
require('ls-view-text-direction');

test('direction with english', () => {
    expect(function () {
        document.body.innerHTML = `
            <input type="text" value="Hello World!" data-ls-text-direction />
        `;

        window.ls.run(window);

        return document.body.innerHTML.trim();
    }()).toEqual('<input type="text" value="Hello World!" style="direction: ltr; text-align: left;">');
});

test('direction with hebrew', () => {
    expect(function () {
        document.body.innerHTML = `
            <input type="text" value="שלום עולם!" data-ls-text-direction />
        `;

        window.ls.run(window);

        return document.body.innerHTML.trim();
    }()).toEqual('<input type="text" value="שלום עולם!" style="direction: rtl; text-align: right;">');
});

test('direction with hebrew - ignore special chars', () => {
    expect(function () {
        document.body.innerHTML = `
            <input type="text" value="@@שלום עולם!" data-ls-text-direction />
        `;

        window.ls.run(window);

        return document.body.innerHTML.trim();
    }()).toEqual('<input type="text" value="@@שלום עולם!" style="direction: rtl; text-align: right;">');
});

test('direction with arabic', () => {
    expect(function () {
        document.body.innerHTML = `
            <input type="text" value="مرحبا بالعالم!" data-ls-text-direction />
        `;

        window.ls.run(window);

        return document.body.innerHTML.trim();
    }()).toEqual('<input type="text" value="مرحبا بالعالم!" style="direction: rtl; text-align: right;">');
});

test('direction with persian', () => {
    expect(function () {
        document.body.innerHTML = `
            <input type="text" value="سلام دنیا!" data-ls-text-direction />
        `;

        window.ls.run(window);

        return document.body.innerHTML.trim();
    }()).toEqual('<input type="text" value="سلام دنیا!" style="direction: rtl; text-align: right;">');
});

test('direction with spanish', () => {
    expect(function () {
        document.body.innerHTML = `
            <input type="text" value="Hola Mundo!" data-ls-text-direction />
        `;

        window.ls.run(window);

        return document.body.innerHTML.trim();
    }()).toEqual('<input type="text" value="Hola Mundo!" style="direction: ltr; text-align: left;">');
});
