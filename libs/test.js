
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

//console.log(document);

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

//var document = "<span name='test' message='test2'></span>";

var DOMtree = [
    {str:'!--', arg:[], content:'', indexs:[]},{str:'col', arg:[], content:'', indexs:[]}, 
    {str:'--', arg:[], content:'', indexs:[]},{str:'datalist', arg:[], content:'', indexs:[]},
    {str:'!DOCTYPE', arg:[], content:'', indexs:[]},{str:'colgroup', arg:[], content:'', indexs:[]},
    {str:'a', arg:[], content:'', indexs:[]},{str:'dd', arg:[], content:'', indexs:[]},
    {str:'abbr', arg:[], content:'', indexs:[]},{str:'del', arg:[], content:'', indexs:[]},
    {str:'address', arg:[], content:'', indexs:[]},{str:'details', arg:[], content:'', indexs:[]},
    {str:'area', arg:[], content:'', indexs:[]},{str:'dfn', arg:[], content:'', indexs:[]},
    {str:'article', arg:[], content:'', indexs:[]},{str:'dialog', arg:[], content:'', indexs:[]},
    {str:'aside', arg:[], content:'', indexs:[]},{str:'div', arg:[], content:'', indexs:[]},
    {str:'audio', arg:[], content:'', indexs:[]},{str:'dl', arg:[], content:'', indexs:[]},
    {str:'b', arg:[], content:'', indexs:[]},{str:'dt', arg:[], content:'', indexs:[]},
    {str:'base', arg:[], content:'', indexs:[]},{str:'em', arg:[], content:'', indexs:[]},
    {str:'bdi', arg:[], content:'', indexs:[]},{str:'embed', arg:[], content:'', indexs:[]},
    {str:'bdo', arg:[], content:'', indexs:[]},{str:'fieldset', arg:[], content:'', indexs:[]},
    {str:'blockquote', arg:[], content:'', indexs:[]},{str:'figcaption', arg:[], content:'', indexs:[]},
    {str:'body', arg:[], content:'', indexs:[]},{str:'figure', arg:[], content:'', indexs:[]},
    {str:'br', arg:[], content:'', indexs:[]},{str:'footer', arg:[], content:'', indexs:[]},
    {str:'button', arg:[], content:'', indexs:[]},{str:'form', arg:[], content:'', indexs:[]},
    {str:'canvas', arg:[], content:'', indexs:[]},{str:'h1', arg:[], content:'', indexs:[]},
    {str:'caption', arg:[], content:'', indexs:[]},{str:'h2', arg:[], content:'', indexs:[]},
    {str:'cite', arg:[], content:'', indexs:[]},{str:'h3', arg:[], content:'', indexs:[]},
    {str:'code', arg:[], content:'', indexs:[]},{str:'h4', arg:[], content:'', indexs:[]},
    {str:'h5', arg:[], content:'', indexs:[]},{str:'kbd', arg:[], content:'', indexs:[]},
    {str:'h6', arg:[], content:'', indexs:[]},{str:'keygen', arg:[], content:'', indexs:[]},
    {str:'head', arg:[], content:'', indexs:[]},{str:'label', arg:[], content:'', indexs:[]},
    {str:'header', arg:[], content:'', indexs:[]},{str:'legend', arg:[], content:'', indexs:[]},
    {str:'hr', arg:[], content:'', indexs:[]},{str:'li', arg:[], content:'', indexs:[]},
    {str:'html', arg:[], content:'', indexs:[]},{str:'link', arg:[], content:'', indexs:[]},
    {str:'i', arg:[], content:'', indexs:[]},{str:'main', arg:[], content:'', indexs:[]},
    {str:'iframe', arg:[], content:'', indexs:[]},{str:'map', arg:[], content:'', indexs:[]},
    {str:'img', arg:[], content:'', indexs:[]},{str:'mark', arg:[], content:'', indexs:[]},
    {str:'input', arg:[], content:'', indexs:[]},{str:'menu', arg:[], content:'', indexs:[]},
    {str:'ins', arg:[], content:'', indexs:[]},{str:'menuitem', arg:[], content:'', indexs:[]},
    {str:'nav', arg:[], content:'', indexs:[]},{str:'meter', arg:[], content:'', indexs:[]},
    {str:'meta', arg:[], content:'', indexs:[]},{str:'noscript', arg:[], content:'', indexs:[]},
    {str:'object', arg:[], content:'', indexs:[]},{str:'optgroup', arg:[], content:'', indexs:[]},
    {str:'ol', arg:[], content:'', indexs:[]},{str:'option', arg:[], content:'', indexs:[]},
    {str:'output', arg:[], content:'', indexs:[]},{str:'p', arg:[], content:'', indexs:[]},
    {str:'param', arg:[], content:'', indexs:[]},{str:'picture', arg:[], content:'', indexs:[]},
    {str:'pre', arg:[], content:'', indexs:[]},{str:'progress', arg:[], content:'', indexs:[]},
    {str:'q', arg:[], content:'', indexs:[]},{str:'rp', arg:[], content:'', indexs:[]},
    {str:'rt', arg:[], content:'', indexs:[]},{str:'ruby', arg:[], content:'', indexs:[]},
    {str:'s', arg:[], content:'', indexs:[]},{str:'samp', arg:[], content:'', indexs:[]},
    {str:'script', arg:[], content:'', indexs:[]},{str:'section', arg:[], content:'', indexs:[]},
    {str:'select', arg:[], content:'', indexs:[]},{str:'small', arg:[], content:'', indexs:[]},
    {str:'source', arg:[], content:'', indexs:[]},{str:'span', arg:[], content:'', indexs:[]},
    {str:'strong', arg:[], content:'', indexs:[]},{str:'style', arg:[], content:'', indexs:[]},
    {str:'sup', arg:[], content:'', indexs:[]},{str:'summary', arg:[], content:'', indexs:[]},
    {str:'sub', arg:[], content:'', indexs:[]},{str:'table', arg:[], content:'', indexs:[]},
    {str:'tbody', arg:[], content:'', indexs:[]},{str:'td', arg:[], content:'', indexs:[]},
    {str:'tfoot', arg:[], content:'', indexs:[]},{str:'textarea', arg:[], content:'', indexs:[]},
    {str:'time', arg:[], content:'', indexs:[]},{str:'title', arg:[], content:'', indexs:[]},
    {str:'th', arg:[], content:'', indexs:[]},{str:'thead', arg:[], content:'', indexs:[]},
    {str:'tr', arg:[], content:'', indexs:[]},{str:'track', arg:[], content:'', indexs:[]},
    {str:'u', arg:[], content:'', indexs:[]},{str:'ul', arg:[], content:'', indexs:[]},
    {str:'var', arg:[], content:'', indexs:[]},{str:'video', arg:[], content:'', indexs:[]},
    {str:'wbr', arg:[], content:'', indexs:[]}];

/**
 * Return truncated document. 
 * @param  {index, document}.
 * @return {document} 
 */

var resize = function(endTag, document){
    if(document){
        //console.log(endTag);
        return document.slice(endTag, document.length);
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
    var i;
    for(i in DOMtree){
        
        var tag = DOMtree[i].str;
        var openTag = '<'+tag+' ';
        var closedTag = '<'+tag+'>';
        var endTag = '</'+tag+'>';
        
        if(tag == 'input' || tag=='link'){
            var endTag = null;
        }
            
        var reminder = 0;
        var taglength = openTag.length;
        do{
            var index = document.search(openTag);
            if(index != -1){
                var index_end = document.search('>');
                var args = document.slice((index+taglength), index_end);
                var document = resize(index_end+1, document);
                reminder += index;
                if(args != ''){
                    DOMtree[i].indexs.push(reminder);
                    DOMtree[i].arg.push(args);                    
                }
            }
            else{
                break;
            }
        }while(true);
        
        var reminder = 0;
        var document = newDocument;
        
        do{
            var index = document.search(closedTag);
            if(index != -1){
                index_end += (index+closedTag.length);
                var args = null;
                var document = resize(index_end, document);
                reminder += index;

            }else{
                break;
            }
        }while(true);
        
        var document = newDocument;
    };
    console.log(DOMtree);
    return DOMtree;
};



var document = readHtmlFile('test.html');//"<section class='content'><div class='padding jsviews'><form><textarea id='jsviews'></textarea><button onclick='refresh_dependencies'>Edit</button></form></div>"
DOMindexer(document, DOMtree);





















