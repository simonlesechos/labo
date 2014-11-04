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
<div id ="dm_page_content" class="dm_layout pagebody">


	      	<?php echo $helper->renderArea('layout.top', '#dm_header.main-header') ?>
        
	
			<?php echo $helper->renderArea('page.customTop_category', '#dm_custom_top_category') ?>
     
       
			<?php echo $helper->renderArea('layout.category_menu', '#dm_category_menu') ?>
     
			<?php echo $helper->renderArea('page.box_menu','#dm_box_menu') ?>
			
	
			
			<?php echo $helper->renderArea('page.category_article', '#dm_category_article') ?>   

			<?php echo $helper->renderArea('layout.category_other_articles', '#dm_category_other_articles') ?>   
	
			<?php echo $helper->renderArea('layout.bottom', '#dm_footer.main-footer') ?>	
	</div>

</div>