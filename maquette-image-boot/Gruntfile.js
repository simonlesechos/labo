module.exports = function(grunt){
		
		// Project configuration.
		grunt.initConfig({
		  concat: {
		    options: {
		      separator: ';',
		    },
		    fusion: {
		      src: ['js/index.js', 'jsc/deux.js'],
		      dest: 'js/built.js',
		    },
		  },

			uncss: {
			  simon: {
			    options: {
			      
			 
			      csspath      : 'css/',
			      
			      stylesheets  : ['style.css', 'image.css'],
			      ignoreSheets : [/fonts.googleapis/],
			      report       : 'min',
			      ignore : ['.navbar nav a']
			    },
			    files: {
					      'css/tidy.css': ['index.php', 'contact.php', 'includes/header.php', 'includes/footer.php']
				}
			  }
			}
		});

	

		grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-uncss');




}