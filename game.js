let config= {
    type: Phaser.CANVAS,
    width:800,
    height:800,
    backgroundColor:0xB09C74,
    scene:{
         preload: preload,
         create:create,
         update:update,
    }


};



// Returns a random integer from 0 to 9:


let game= new Phaser.Game(config);

function preload(){
    console.log("preload");
    this.load.image("wheel2","./Assets/wheel2.png");
    this.load.image("pin","./Assets/pin.png")
    this.load.image("stand","./Assets/stand.png")
    this.load.image("background","./Assets/back.jpg")
    console.log(this);
    
}
function create(){
    console.log("create");
    let W=game.config.width;
    let H=game.config.height;
     background=this.add.sprite(0,0,"background");
     background.setPosition(H/2,W/2);
     background.setScale(2)
    stand= this.add.sprite(0,0,"stand");
    stand.setPosition(H/2,W/2+300);
    stand.setScale(0.30);
    this.wheel= this.add.sprite(0,0,"wheel2");
    this.wheel.setPosition(H/2,W/2);
    this.wheel.setScale(0.30);
    pin= this.add.sprite(0,0,"pin");
    pin.setPosition(H/2,W/2-300);
    pin.setScale(0.30);
  
    var font1={
        font:"45px Arial",
        color:"white",
    }
    this.gametext=this.add.text(10,10,"Your result  is : ",font1)

    this.input.on("pointerdown",spinwheel,this);





    
}

function spinwheel(){
    console.log("ddfsd");
    let arr=["Flipkart Coupon","Prime 250 off","win 100 Rs","Hard Luck","Win 500 Rs","Win 2000 rs","Nike Coupon","Netflix Subs.","Bad Luck","Amazon Voucher", "2 Extra Spin","Dsa Course"]
    this.wheel.angle+=10;
     let ran=Math.floor(Math.random() * 360); 
    // let ran=60;
    let vall="a";
    if(ran<15 || ran>345){
        vall=arr[0];
    }
    else if(ran>315 ){
        vall=arr[1];

    }
    else if(ran>285 ){
        vall=arr[2];

    }
    else if(ran>255 ){
        vall=arr[3];

    }    else if(ran>225 ){
        vall=arr[4];

    }
    else if(ran>195 ){
        vall=arr[5];

    }
    else if(ran>165 ){
        vall=arr[6];

    } else if(ran>135 ){
        vall=arr[7];

    }
    else if(ran>105 ){
        vall=arr[8];

    }
    else if(ran>75 ){
        vall=arr[9];

    }
    else if(ran>45 ){
        vall=arr[10];

    }
    else if(ran>15 ){
        vall=arr[11];

    }


     let temp1= ran+360+360;
    tween = this.tweens.add({
        targets: this.wheel,
        angle:`${temp1}`,


        duration: 2000,
    });

 
   
setTimeout(() => {
    this.gametext.setText(`You Win = `+vall)
  }, "2000")


        }
function update(){
    // this.wheel.angle-=3;

    // this.wheel.scaleX+=0.11;
    // this.wheel.scaleY+=0.1;
console.log("ran");
  
    
}
