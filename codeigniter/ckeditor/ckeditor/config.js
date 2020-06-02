/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	config.filebrowserBrowseUrl = 'http://localhost/learning/codeigniter/ckeditor/ckeditor/kcfinder/browse.php?type=files';
    config.filebrowserImageBrowseUrl = 'http://localhost/learning/codeigniter/ckeditor/ckeditor/kcfinder/browse.php?type=images';
    config.filebrowserFlashBrowseUrl = 'http://localhost/learning/codeigniter/ckeditor/ckeditor/kcfinder/browse.php?type=flash';
    config.filebrowserUploadUrl = 'http://localhost/learning/codeigniter/ckeditor/ckeditor/kcfinder/upload.php?type=files';
    config.filebrowserImageUploadUrl = 'http://localhost/learning/codeigniter/ckeditor/ckeditor/kcfinder/upload.php?type=images';
    config.filebrowserFlashUploadUrl = 'http://localhost/learning/codeigniter/ckeditor/ckeditor/kcfinder/upload.php?type=flash';

	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'About,Templates,Scayt,CopyFormatting,RemoveFormat,CreateDiv,Language,BidiRtl,BidiLtr,Flash,ShowBlocks,PasteText,PasteFromWord,Source,Save,NewPage,Preview,Print,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,PageBreak,Anchor,Cut,Copy,Paste,Find,Replace,SelectAll,Html5video,Iframe,Styles,Format,Font,FontSize,Blockquote,Strike,HorizontalRule';
};