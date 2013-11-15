<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

	<head >
	
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		
		<link rel="stylesheet" type="text/css" href="<?php echo base_url( 'skin/css/styles.css' ); ?>" />
		
		<title>
		
			My Experiments With CodeIgniter
			
		</title>
		
	</head>

	<body>
	
		<div id="totalbrooks" >
		
			<div class="HeaderC" >
			
				<?php $this->load->view( 'Page/Header' ); ?>
			
			</div>
			
			<div class="MainContentC" >
			
				<?php $this->load->view( $maincontP ); ?>
				
			</div>
			
			<!-- <div class="MainC1C" >
			
				<?php //$this->load->view( $mainc1P ); ?>
				
			</div> -->
			
			<div class="FooterC" >
			
				<?php $this->load->view( 'Page/Footer' ); ?>
				
			</div>
			
		</div >
		
		<?php $this->load->view( $scriptP ); ?>
		
	</body>
	
</html>