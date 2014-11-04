<?php
/*
 * Render a page.
 * Layout areas and page content area are rendered.
 * 
 * Available vars :
 * - dmFrontPageHelper $helper      ( page_helper service )
 * - boolean           $isEditMode  ( whether the user is allowed to edit page )
 * 
 * 
 * to use grid system of bootstrap
 * <?php echo $helper->renderArea('layout.top', '#dm_header.span3.offset1') ?> 
 * in that case you must define manually the spanX and offsetX
 *
 * See variables.less to define GRID parameters
 * 
 */

?>

<div id="dm_page">
<div class="dm_layout homebody">
	
	      	<?php echo $helper->renderArea('layout.top', '#dm_header.main-header') ?>
        
	
			<?php echo $helper->renderArea('page.customTop', '#dm_custom_top') ?>
     
       
			<?php echo $helper->renderArea('page.home_spotlight', '#dm_spotlight') ?>
     
			<?php echo $helper->renderArea('layout.home_categories','#dm_home_categories') ?>
			
	
			
			<?php echo $helper->renderArea('page.home_special', '#dm_home_special') ?>      

	
			<?php echo $helper->renderArea('layout.bottom', '#dm_footer.main-footer') ?>	
		
	</div>
  </div>
</div>