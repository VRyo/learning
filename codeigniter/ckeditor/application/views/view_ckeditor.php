<html>
<head>
	<meta charset="utf-8">
	<title>CKeditor CodeIgniter</title>
    <!-- CKEDITOR -->
    <script type="text/javascript" src="<?= base_url(); ?>ckeditor/ckeditor.js"></script>
</head>
<body>
    <form>
        <textarea class="form-control" name="ckeditor_1" id="ckeditor_1"></textarea>
    </form>

    <script type="text/javascript">
        CKEDITOR.replace('ckeditor_1');
    </script>

</body>
</html>