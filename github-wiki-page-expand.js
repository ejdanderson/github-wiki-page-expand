// ==UserScript==
// @name		Github Wiki Page Tab Expander
// @namespace	http://evanjdanderson.com/
// @version		0.1
// @description	Expand the pages tab in github's wiki on pageload
// @match		https://github.com/*/wiki/*
// @copyright	2014+, Evan Anderson
// @author		Evan Anderson
// @source
// ==/UserScript==

$('.wiki-pages-box .js-wiki-toggle-collapse').click();
