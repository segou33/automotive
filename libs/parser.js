/*Load the file for parsing
authorize only html files,
*/

/**
 * Return truncated document. 
 * @param  {index, document}.
 * @return {document} 
 */


var readHtmlFile = function(document){
    
    var jsdom = require("jsdom");
    var fs = require('fs');
    
    const { JSDOM } = jsdom;
    const { window } = new JSDOM();
    const $ = require('jquery')(window);
    
    var txt = fs.readFileSync(document, 'utf8');
    //console.log(txt);
    return txt;
};

/*
parsing use three steps, 
1 - get dom structure, 
2 - get arguments from tags,
3 - identifie the content of tags.
*/

/*parcourire 
le dom et obtenir l'index des tags contenus dans HtmlTagsStr, 
on possede un array permettant de contenir les indexs pour chaque type de tags,
pour chaque index, on vérifie ensuite s'il est attribué par des class, 
*/

var document = "<span name='test' message='test2'></span>";

var DOMtree = [
    {str:'<!--', arg:[], content:'', indexs:[]},{str:'<col', arg:[], content:'', indexs:[]}, 
    {str:'-->', arg:[], content:'', indexs:[]},{str:'<datalist', arg:[], content:'', indexs:[]},
    {str:'<!DOCTYPE', arg:[], content:'', indexs:[]},{str:'<colgroup', arg:[], content:'', indexs:[]},
    {str:'<a', arg:[], content:'', indexs:[]},{str:'<dd', arg:[], content:'', indexs:[]},
    {str:'<abbr', arg:[], content:'', indexs:[]},{str:'<del', arg:[], content:'', indexs:[]},
    {str:'<address', arg:[], content:'', indexs:[]},{str:'<details', arg:[], content:'', indexs:[]},
    {str:'<area', arg:[], content:'', indexs:[]},{str:'<dfn', arg:[], content:'', indexs:[]},
    {str:'<article', arg:[], content:'', indexs:[]},{str:'<dialog', arg:[], content:'', indexs:[]},
    {str:'<aside', arg:[], content:'', indexs:[]},{str:'<div', arg:[], content:'', indexs:[]},
    {str:'<audio', arg:[], content:'', indexs:[]},{str:'<dl', arg:[], content:'', indexs:[]},
    {str:'<b', arg:[], content:'', indexs:[]},{str:'<dt', arg:[], content:'', indexs:[]},
    {str:'<base', arg:[], content:'', indexs:[]},{str:'<em', arg:[], content:'', indexs:[]},
    {str:'<bdi', arg:[], content:'', indexs:[]},{str:'<embed', arg:[], content:'', indexs:[]},
    {str:'<bdo', arg:[], content:'', indexs:[]},{str:'<fieldset', arg:[], content:'', indexs:[]},
    {str:'<blockquote', arg:[], content:'', indexs:[]},{str:'<figcaption', arg:[], content:'', indexs:[]},
    {str:'<body', arg:[], content:'', indexs:[]},{str:'<figure', arg:[], content:'', indexs:[]},
    {str:'<br', arg:[], content:'', indexs:[]},{str:'<footer', arg:[], content:'', indexs:[]},
    {str:'<button', arg:[], content:'', indexs:[]},{str:'<form', arg:[], content:'', indexs:[]},
    {str:'<canvas', arg:[], content:'', indexs:[]},{str:'<h1', arg:[], content:'', indexs:[]},
    {str:'<caption', arg:[], content:'', indexs:[]},{str:'<h2', arg:[], content:'', indexs:[]},
    {str:'<cite', arg:[], content:'', indexs:[]},{str:'<h3', arg:[], content:'', indexs:[]},
    {str:'<code', arg:[], content:'', indexs:[]},{str:'<h4', arg:[], content:'', indexs:[]},
    {str:'<h5', arg:[], content:'', indexs:[]},{str:'<kbd', arg:[], content:'', indexs:[]},
    {str:'<h6', arg:[], content:'', indexs:[]},{str:'<keygen', arg:[], content:'', indexs:[]},
    {str:'<head', arg:[], content:'', indexs:[]},{str:'<label', arg:[], content:'', indexs:[]},
    {str:'<header', arg:[], content:'', indexs:[]},{str:'<legend', arg:[], content:'', indexs:[]},
    {str:'<hr', arg:[], content:'', indexs:[]},{str:'<li', arg:[], content:'', indexs:[]},
    {str:'<html', arg:[], content:'', indexs:[]},{str:'<link', arg:[], content:'', indexs:[]},
    {str:'<i', arg:[], content:'', indexs:[]},{str:'<main', arg:[], content:'', indexs:[]},
    {str:'<iframe', arg:[], content:'', indexs:[]},{str:'<map', arg:[], content:'', indexs:[]},
    {str:'<img', arg:[], content:'', indexs:[]},{str:'<mark', arg:[], content:'', indexs:[]},
    {str:'<input', arg:[], content:'', indexs:[]},{str:'<menu', arg:[], content:'', indexs:[]},
    {str:'<ins', arg:[], content:'', indexs:[]},{str:'<menuitem', arg:[], content:'', indexs:[]},
    {str:'<nav', arg:[], content:'', indexs:[]},{str:'<meter', arg:[], content:'', indexs:[]},
    {str:'<meta', arg:[], content:'', indexs:[]},{str:'<noscript', arg:[], content:'', indexs:[]},
    {str:'<object', arg:[], content:'', indexs:[]},{str:'<optgroup', arg:[], content:'', indexs:[]},
    {str:'<ol', arg:[], content:'', indexs:[]},{str:'<option', arg:[], content:'', indexs:[]},
    {str:'<output', arg:[], content:'', indexs:[]},{str:'<p', arg:[], content:'', indexs:[]},
    {str:'<param', arg:[], content:'', indexs:[]},{str:'<picture', arg:[], content:'', indexs:[]},
    {str:'<pre', arg:[], content:'', indexs:[]},{str:'<progress', arg:[], content:'', indexs:[]},
    {str:'<q', arg:[], content:'', indexs:[]},{str:'<rp', arg:[], content:'', indexs:[]},
    {str:'<rt', arg:[], content:'', indexs:[]},{str:'<ruby', arg:[], content:'', indexs:[]},
    {str:'<s', arg:[], content:'', indexs:[]},{str:'<samp', arg:[], content:'', indexs:[]},
    {str:'<script', arg:[], content:'', indexs:[]},{str:'<section', arg:[], content:'', indexs:[]},
    {str:'<select', arg:[], content:'', indexs:[]},{str:'<small', arg:[], content:'', indexs:[]},
    {str:'<source', arg:[], content:'', indexs:[]},{str:'<span', arg:[], content:'', indexs:[]},
    {str:'<strong', arg:[], content:'', indexs:[]},{str:'<style', arg:[], content:'', indexs:[]},
    {str:'<sup', arg:[], content:'', indexs:[]},{str:'<summary', arg:[], content:'', indexs:[]},
    {str:'<sub', arg:[], content:'', indexs:[]},{str:'<table', arg:[], content:'', indexs:[]},
    {str:'<tbody', arg:[], content:'', indexs:[]},{str:'<td', arg:[], content:'', indexs:[]},
    {str:'<tfoot', arg:[], content:'', indexs:[]},{str:'<textarea', arg:[], content:'', indexs:[]},
    {str:'<time', arg:[], content:'', indexs:[]},{str:'<title', arg:[], content:'', indexs:[]},
    {str:'<th', arg:[], content:'', indexs:[]},{str:'<thead', arg:[], content:'', indexs:[]},
    {str:'<tr', arg:[], content:'', indexs:[]},{str:'<track', arg:[], content:'', indexs:[]},
    {str:'<u', arg:[], content:'', indexs:[]},{str:'<ul', arg:[], content:'', indexs:[]},
    {str:'<var', arg:[], content:'', indexs:[]},{str:'<video', arg:[], content:'', indexs:[]},
    {str:'<wbr', arg:[], content:'', indexs:[]}];

/**
 * Return truncated document. 
 * @param  {index, document}.
 * @return {document} 
 */

var resize = function(tagLength, document){
    if(document){
        return document.slice(tagLength, document.length);
    }else{
        return 0;
    }
};

/**
 * Return indexed DOMtree. 
 * @param  {document, DOMtree}.
 * @return {DOMtree} 
 */

var DOMindexer = function(document, DOMtree){    
    var newDocument = document;
    var reminder = 0;
    var i;
    for(i in DOMtree){
        var tagLength = DOMtree[i].str.length;
        var open_bracket_index = document.search(DOMtree[i].str);
    
        if(document.charAt(open_bracket_index+tagLength) != ' '){
                open_bracket_index = -1;
        };
            
        if(-1 != open_bracket_index){
            
            var closed_bracket_index = document.search('>');
            reminder += open_bracket_index;

            var args = document.slice((open_bracket_index+tagLength), closed_bracket_index);
            DOMtree[i].indexs.push(reminder);
            DOMtree[i].arg.push(args);
            var document = resize(tagLength, document);
            console.log(args);
            console.log(document);
            };            
    
        var document = newDocument;
  
    }
    console.log(DOMtree);
    return DOMtree;
};






//list of all HTML5's tags. 
const HtmlTagsStr = ['<!--', '--', '<!DOCTYPE', '<a', 
                    '<abbr', '<address', '<area', '<article',
                    '<aside', '<audio', '<b', '<base', '<bdi', '<bdo',
                    '<blockquote', '<body', '<br', '<button', '<canvas', 
                    '<caption', '<cite', '<code', '<col', '<colgroup', 
                    '<datalist', '<dd', '<del', '<details', '<dfn', 
                    '<dialog', '<div', '<dl', '<dt', '<em', '<embed', 
                    '<fieldset', '<figcaption', '<figure', '<footer', '<form',
                    '<h1', '<h2', '<h3', '<h4', '<h5', '<h6', '<head', 
                    '<header', '<hr', '<html', '<i', '<iframe', '<img',
                    '<input', '<ins', '<kbd', '<keygen', '<label', '<legend', 
                    '<li', '<link', '<main', '<map', '<mark', '<menu', 
                    '<menuitem', '<nav', '<meter', '<meta', '<noscript', '<object', 
                    '<optgroup', '<ol', '<option', '<output', '<p', '<param', 
                    '<picture', '<pre', '<progress', '<q', '<rp', '<rt',
                    '<ruby', '<s', '<samp', '<script', '<section', '<select',
                    '<small', '<source', '<span',  '<strong', '<style', 
                    '<sup', '<summary', '<sub', '<table', '<tbody', '<td', 
                    '<tfoot', '<textarea', '<th', '<thead', '<time', '<title',
                    '<tr', '<track', '<u', '<ul', '<var', '<video', '<wbr'];


    
    
for element in document{
        
    }
for tag in HtmltTagsStr{
  if   element == tag+'>'{
      
  }
} 
    
    const HtmlTagsAttr = ['name=', 'type=', 'action=',
                               'onclick=', 'onsubmit=', 'method=',
                               'class=', 'id=','value=', 'email=',
                               'password=', ''];
    
    
    var document = fetch(path);
    
    
    



/**
 * Return a list of node, values. 
 * @param  {index, document}.
 * @return {document} 
 */

getAttributeById function(tag_index, document){
    var element = document.getElementById("someId");
    
    var frame = [];
    var nodes= [];
    var values= [];
    
    for (var att, i = 0, atts = el.attributes, n = atts.length; i < n; i++){
        att = atts[i];
        nodes.push(att.nodeName);
        values.push(att.nodeValue);
        frame.push([node,values]);
    }
    return frame;
}








































