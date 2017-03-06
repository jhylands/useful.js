/**
 *Class for all of the visual simple box elements
 * 
 */
 function dotView(){
   this.HTML;
   this.name ='';
   /**
    * Function to create the dot element in the scene
    * @param Name The name of the elment
    */
   this.createObject = function(name){
     this.name=i;	
      doucment.getElementById('container').innerHTML+='<div id=\'A' + this.name + '\' style=\'position:absolute;width:10px;height:10px\'></div>';
      var this.HTML = document.getElementById('A' + this.name);
   };
   his.setLeft = function(left){
  	this.HTML.position.left=left;
  };
  this.getLeft = function(){
  	return this.HTML.position.left;
  };
  this.setTop = function(top){
  	this.HTML.position.top = top;
  };
  this.getTop = function(){
  	return this.HTML.position.top;
  };
   this.move = fucntion(){
  	this.setLeft(this.getLeft()+this.getHorizontal());
    this.setTop(this.getTop()+this.getVertical());
  };
   
 }