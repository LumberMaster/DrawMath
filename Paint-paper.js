function load_img_src(id,src){
     src = './Imgs/' + src 
     document.getElementById(id).setAttribute('src',src);
}

function change_size_canvas(){
    let inputWidth = document.getElementById('WidthCanvas').value,
        inputHeight = document.getElementById('HeightCanvas').value,
        canvas_div = document.getElementById('canvas-div'),
        canvas_div_height = canvas_div.offsetHeight,
        canvas_div_width = canvas_div.offsetWidth,
        canvas = document.getElementById('canvas-paint-paper');
    
    if((inputWidth<canvas_div_width)||(inputHeight<canvas_div_height)){
        canvas.setAttribute('width',canvas_div_width);
        canvas.setAttribute('height',canvas_div_height);
        inputWidth = canvas_div_width;
        inputHeight = canvas_div_height;
    }else{
        canvas.setAttribute('width',inputWidth);
        canvas.setAttribute('height',inputHeight);        
    }
}
function Fixing_paint_paper(){
    let height = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight,
        width = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth,
        canvas_width = document.getElementById('WidthCanvas').value,
        canvas_height = document.getElementById('HeightCanvas').value,
        canvas_div = document.getElementById('canvas-div'),
        canvas_div_Width = document.getElementById('canvas-div').offsetWidth, 
        canvas_div_Height = document.getElementById('canvas-div').offsetHeight; 

    document.getElementById('canvas-paint-paper').setAttribute('width', canvas_width);
    document.getElementById('canvas-paint-paper').setAttribute('height', canvas_height);
    
    document.getElementById('canvas-paint-paper').addEventListener('mousemove', function(e){
        
        let   canvas_div_scrollY = canvas_div.scrollTop,
              canvas_div_scrollX = canvas_div.scrollLeft,
              Pos_x = e.pageX,
              Pos_y = e.pageY;
      
       //Вывод позиции мышки в футер 
        
        document.getElementById('posMouse').innerHTML = 'X = ' + (Pos_x + canvas_div_scrollX) + ' Y = ' + ((Pos_y-100)+canvas_div_scrollY);
        
    });
    
    document.getElementById('canvas-div').setAttribute('style','min-height:' + (height-140) + 'px;'+'min-width:' + (width-(width-canvas_div_Width)) + 'px;'+'max-height:' + (height-140) + 'px;'+'max-width:' + (width-(width-canvas_div_Width)) + 'px;');

}
function load_paint_paper(){
    let paint_paper = document.getElementById('border-div-paint-paper');
    
    if(paint_paper){
      document.getElementById('wrapper').removeChild(paint_paper);
    }else{
    
      let div = document.createElement('div'),
          menu = document.createElement('div'),
          tools_option = document.createElement('div'),
          tools = document.createElement('div'),
          pen = document.createElement('img'),
          canvas = document.createElement('canvas'),
          canvas2 = document.createElement('canvas'),
          Eraser = document.createElement('img'),
          text = document.createElement('img'),
          line = document.createElement('img'),
          clean_all = document.createElement('img'),
          pen_color = document.createElement('input'),
        //   pen_color_value_div = document.createElement('div'),
          pen_size = document.createElement('input'),
          button_exit_paint = document.createElement('div'),
          top_border_paint_paper = document.createElement('div'),
          bottom_border_paint_paper = document.createElement('div'),
          left_border_paint_paper = document.createElement('div'),
          right_border_paint_paper = document.createElement('div'),
          border_div_paint_paper = document.createElement('div');
        
      border_div_paint_paper.setAttribute('id','border-div-paint-paper');
      top_border_paint_paper.setAttribute('id','top_border_paint_paper');
      top_border_paint_paper.setAttribute('onmouseover','move_canvas()');
      bottom_border_paint_paper.setAttribute('id','bottom_border_paint_paper');
      bottom_border_paint_paper.setAttribute('onmouseover','move_canvas()');
      right_border_paint_paper.setAttribute('id','right_border_paint_paper');
      right_border_paint_paper.setAttribute('onmouseover','move_canvas()');
      left_border_paint_paper.setAttribute('id','left_border_paint_paper');
      left_border_paint_paper.setAttribute('onmouseover','move_canvas()');
        
      div.setAttribute('id','div-paint-paper');
      menu.setAttribute('id','div-menu-paint-paper');
      
      clean_all.setAttribute('id','clean_all-paint-paper');
      clean_all.setAttribute('src','/static/Imgs/clean-all-NotActive.png'); 
      clean_all.setAttribute('onclick',"clean_all_canvas_paint()");
      clean_all.setAttribute('onmouseover',"load_img_src('clean_all-paint-paper','clean-all-Active.png')");
      clean_all.setAttribute('onmouseout',"load_img_src('clean_all-paint-paper','clean-all-NotActive.png')");
      clean_all.setAttribute('title',"Очистить холст");
        
      pen.setAttribute('id','pen-NotActive-paint-paper');
      pen.setAttribute('src','/static/Imgs/Pen-NotActive.png'); 
      pen.setAttribute('onmouseover',"load_img_src('pen-NotActive-paint-paper','Pen-Active.png')");
      if(!document.getElementById('pen-Active-paint-paper')){pen.setAttribute('onmouseout',"load_img_src('pen-NotActive-paint-paper','Pen-NotActive.png')");}
      pen.setAttribute('onclick',"pen_activator()");
      pen.setAttribute('title',"Ручка");
      
       
      text.setAttribute('id','text-NotActive-paint-paper');
      text.setAttribute('src','/static/Imgs/Text-NotActive.png');
      text.setAttribute('onmouseover',"load_img_src('text-NotActive-paint-paper','Text-Active.png')");
      text.setAttribute('onmouseout',"load_img_src('text-NotActive-paint-paper','Text-NotActive.png')");
      text.setAttribute('title',"Вставка текста"); 
        
      line.setAttribute('id','line-NotActive-paint-paper');
      line.setAttribute('src','/static/Imgs/Line-NotActive.png');
      line.setAttribute('onmouseover',"load_img_src('line-NotActive-paint-paper','Line-Active.png')");
      line.setAttribute('onmouseout',"load_img_src('line-NotActive-paint-paper','Line-NotActive.png')"); 
      line.setAttribute('title','Прямая линия');
        
      tools.setAttribute('id','tools-paint-paper');
        
      tools_option.setAttribute('id','tools-option');
      
      pen_color.setAttribute('id','pen-color-input');
      pen_color.setAttribute('value','#000000');
      pen_color.setAttribute('title','Цвет ручки');
      pen_color.addEventListener('input', Painting);
        
    //   pen_color_value_div.setAttribute('id','pen_color_value_div');
        
      pen_size.setAttribute('id','pen-size-input');
      pen_size.setAttribute('value','2');
      pen_size.setAttribute('title','Размер ручки');
      pen_size.addEventListener('input', Painting);
        
      button_exit_paint.setAttribute('id','button-exit-paint');
      button_exit_paint.innerHTML = '✖'; 
      button_exit_paint.setAttribute('onclick','load_paint_paper()'); 
        
      Eraser.setAttribute('id','Eraser-NotActive'); 
      Eraser.setAttribute('src','/static/Imgs/Eraser-NotActive.png');
      Eraser.title = 'Ластик';
      Eraser.setAttribute('onmouseover',"load_img_src('Eraser-NotActive','Eraser-Active.png')");
      if(!document.getElementById('Eraser-Active')){Eraser.setAttribute('onmouseout',"load_img_src('Eraser-NotActive','Eraser-NotActive.png')");}
      Eraser.setAttribute('onclick',"Eraser_activator()");
        
      canvas2.setAttribute('id','canvas2-paint-paper');
      canvas2.setAttribute('height','565');
      canvas2.setAttribute('width','400');
      canvas2.setAttribute('onmouseover','Painting()');
      canvas2.setAttribute('background','#00000066');
    
      canvas.setAttribute('id','canvas-paint-paper');
      canvas.setAttribute('height','565');
      canvas.setAttribute('width','400');
      canvas.setAttribute('onmouseover','Painting()');
      canvas.setAttribute('background','#ddd');
      
      
      tools_option.appendChild(pen_size);
      tools_option.appendChild(pen_color);
    //   tools_option.appendChild(pen_color_value_div);  
     
      tools.appendChild(clean_all);
      tools.appendChild(pen);  
      tools.appendChild(Eraser); 
      tools.appendChild(text); 
      tools.appendChild(line); 
      tools.appendChild(button_exit_paint);
        
      menu.appendChild(tools);
      menu.appendChild(tools_option);  
        
      div.appendChild(menu);
      div.appendChild(canvas);
        
        
      border_div_paint_paper.appendChild(top_border_paint_paper);  
      border_div_paint_paper.appendChild(left_border_paint_paper);
      border_div_paint_paper.appendChild(div);
      border_div_paint_paper.appendChild(right_border_paint_paper);
      border_div_paint_paper.appendChild(bottom_border_paint_paper);
        
      document.getElementById('wrapper').appendChild(border_div_paint_paper);
}
}
function pen_activator(){
    load_img_src('pen-NotActive-paint-paper','Pen-Active.png');
    document.getElementById('pen-NotActive-paint-paper').setAttribute('onmouseover',"");
    document.getElementById('pen-NotActive-paint-paper').setAttribute('onmouseout',"");
    document.getElementById('pen-NotActive-paint-paper').setAttribute('onclick',"pen_deactivator()");
    document.getElementById('pen-NotActive-paint-paper').setAttribute('id','pen-Active-paint-paper');
    if(document.getElementById('Eraser-Active')){Eraser_deactivator();}
}
function pen_deactivator(){
    load_img_src('pen-Active-paint-paper','Pen-NotActive.png');
    document.getElementById('pen-Active-paint-paper').setAttribute('onmouseover',"load_img_src('pen-NotActive-paint-paper','Pen-Active.png')");
    document.getElementById('pen-Active-paint-paper').setAttribute('onmouseout',"load_img_src('pen-NotActive-paint-paper','Pen-NotActive.png')");
    document.getElementById('pen-Active-paint-paper').setAttribute('onclick',"pen_activator()");
    document.getElementById('pen-Active-paint-paper').setAttribute('id','pen-NotActive-paint-paper');
//    document.getElementById('canvas-paint-paper').removeEventListener('mousemove', draw);
//    document.getElementById('canvas-paint-paper').removeEventListener('mousedown', draw);
//    document.getElementById('canvas-paint-paper').removeEventListener('mouseout',StopDraw);
    
}
function Eraser_activator(){
    load_img_src('Eraser-NotActive','Eraser-Active.png');
    document.getElementById('Eraser-NotActive').setAttribute('onmouseover',"");
    document.getElementById('Eraser-NotActive').setAttribute('onmouseout',"");
    document.getElementById('Eraser-NotActive').setAttribute('onclick',"Eraser_deactivator()");
    document.getElementById('Eraser-NotActive').setAttribute('id','Eraser-Active');
    if(document.getElementById('pen-Active-paint-paper')){pen_deactivator();}
}
function Eraser_deactivator(){
    load_img_src('Eraser-Active','Eraser-NotActive.png');
//    document.getElementById('Eraser-NotActive').setAttribute('onmouseover',"load_img_src('Eraser-Active','Eraser-Active.png')");
    document.getElementById('Eraser-Active').setAttribute('onmouseout',"load_img_src('Eraser-NotActive','Eraser-NotActive.png')");
    document.getElementById('Eraser-Active').setAttribute('onclick',"Eraser_activator()");
    document.getElementById('Eraser-Active').setAttribute('id','Eraser-NotActive');
//    document.getElementById('canvas-paint-paper').removeEventListener('mousemove', draw);
//    document.getElementById('canvas-paint-paper').removeEventListener('mousedown', draw);
//    document.getElementById('canvas-paint-paper').removeEventListener('mouseout',StopDraw);
}
function Painting(){
  let canvas = document.getElementById('canvas-paint-paper'),
      ctx = canvas.getContext('2d'),  
      canvas_div = document.getElementById('canvas-div'),
      canvas_div_scrollY = canvas_div.scrollTop,
      canvas_div_scrollX = canvas_div.scrollLeft,
      menuHeight = document.getElementById('div-menu-paint-paper').offsetHeight,
      menuWidth = document.getElementById('div-menu-paint-paper').offsetWidth,
      cnvsWidth = canvas.width,
      isMouseDown = false,
      cnvsHeight = canvas.height,
      clientWidth = document.documentElement.clientWidth,
      clientHeight = document.documentElement.clientHeight,
      pen_color = document.getElementById('input_color_pen').value,
      posMouseDiv = document.getElementById('posMouse').value,
      pen_size = document.getElementById('pen-size-input').value;
      
    
canvas.addEventListener('mouseup',function(){isMouseDown = false;ctx.lineWidth = pen_size;});
canvas.addEventListener('mousedown',function(){
    isMouseDown = true;
    pen_size = document.getElementById('pen-size-input').value;
    pen_color = document.getElementById('input_color_pen').value;
    ctx.lineWidth = pen_size;
    ctx.beginPath();
});   
    
    
    
let pen_size_change = function(e){
    if((e.deltaY>0)&&(e.deltaY!=0)){
     if(document.getElementById('pen-size-input').value>2){
        document.getElementById('pen-size-input').value = Number(document.getElementById('pen-size-input').value) - 1;
    }
    }else{
      if(document.getElementById('pen-size-input').value<99){
         document.getElementById('pen-size-input').value = Number(document.getElementById('pen-size-input').value) + 1;
    }
}
};
    
    

//    canvas.onwheel = pen_size_change;// Увеличение размера кисти при прокрутке
    
    //   pen_color_value_div.setAttribute('style','background:'+pen_color+';');
    
  let StopDraw = function(){
        isMouseDown = false;
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mousedown', draw);
        canvas.removeEventListener('mouseout',StopDraw);
  }  
  
  let draw = function(e){
          let canvas_div_scrollY = canvas_div.scrollTop,
              canvas_div_scrollX = canvas_div.scrollLeft,
              Pos_x = e.pageX,
              Pos_y = e.pageY;
            
      

//          console.log('X = ' + canvas_div_scrollX + ' Y = ' + canvas_div_scrollY);
      
          Pos_x = Pos_x + canvas_div_scrollX;
          Pos_y = (Pos_y - menuHeight) + canvas_div_scrollY;
              
         if(isMouseDown){  
             
             ctx.lineTo(Pos_x,Pos_y);
             ctx.stroke();
             
             ctx.beginPath();
             ctx.arc(Pos_x,Pos_y,pen_size/2,0,Math.PI * 2);
             ctx.fill();
             
             ctx.beginPath();
             ctx.moveTo(Pos_x,Pos_y);
             
          }
                               
     
  }


  
  
    if(document.getElementById('pen-Active-paint-paper')){  
        ctx.fillStyle = pen_color;
        ctx.strokeStyle = pen_color;
        ctx.lineWidth = pen_size;
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mousedown', draw);
        canvas.addEventListener('mouseout', StopDraw);
        }
    
    if(document.getElementById('Eraser-Active')){
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = pen_size;
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mousedown', draw);
        canvas.addEventListener('mouseout', StopDraw);
        }
}

function clean_all_canvas_paint(){
       let canvas = document.getElementById('canvas-paint-paper'),
           ctx = canvas.getContext('2d');
    
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function gridDraw(){
    let canvas = document.getElementById('canvas-paint-paper'),
        ctx = canvas.getContext('2d'),
        widthCanvas = canvas.width,
        heightCanvas = canvas.height,
        Size_Grid = 20;
    
    ctx.strokeStyle = 'gray';
    ctx.lineWidth=1;
    
    
    for(let i = 0;i<widthCanvas;i+=Size_Grid){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,heightCanvas);
        ctx.stroke();
    };
    
    
    for(let i = 0 ;i<heightCanvas;i+=Size_Grid){ 
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(widthCanvas, i);
        ctx.stroke();       
    };
}

function rulerDraw(){
    let canvas = document.getElementById('canvas-paint-paper'),
        ctx = canvas.getContext('2d'),
        widthCanvas = canvas.width,
        heightCanvas = canvas.height,
        Size_Grid = 20;
    
    ctx.strokeStyle = 'gray';
    ctx.lineWidth=1;
    
    
    for(let i = 0 ;i<heightCanvas;i+=Size_Grid){ 
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(widthCanvas, i);
        ctx.stroke();       
    };
}

function test(){
    addEventListener("keyup", function(e) {
    console.log(e)
  });
}

addEventListener("keyup", function(e) {
    if (e.keyCode == "122"){
        Fixing_paint_paper();
    }
  });

  function download_canvas() {
    let canvas = document.getElementById('canvas-paint-paper');
    // let btn = document.getElementById('btn-download');

    let imageData = canvas.toDataURL('image/png');
    let image = new Image();
    image.src = imageData;


    let link = document.createElement("a");
 
    link.setAttribute("href", image.src);
    link.setAttribute("download", "CANVAS");
    link.click();
  }