// components/yanXuan.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    attached(){
        wx.getSystemInfo({
            success: (res) => {
              let ww = res.windowWidth;
              let wh = res.windowHeight;
              let imgWidth = ww * 0.48;
              let scrollH = wh;
      
              this.setData({
                scrollH: scrollH,
                imgWidth: imgWidth
              });
      
              //加载首组图片
              this.loadImages();
            }
          })
    },
    /**
     * 组件的初始数据
     */
    data: {
        scrollH: 0,
        imgWidth: 0,
        loadingCount: 0,
        images: [],
        col1: [],
        col2: []
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onImageLoad: function (e) {
            let imageId = e.currentTarget.id;
            let oImgW = e.detail.width;         //图片原始宽度
            let oImgH = e.detail.height;        //图片原始高度
            let imgWidth = this.data.imgWidth;  //图片设置的宽度
            let scale = imgWidth / oImgW;        //比例计算
            let imgHeight = oImgH * scale;      //自适应高度
          
            let images = this.data.images;
            let imageObj = null;
          
            for (let i = 0; i < images.length; i++) {
              let img = images[i];
              if (img.id === imageId) {
                imageObj = img;
                break;
              }
            }
          
            imageObj.height = imgHeight;
          
            let loadingCount = this.data.loadingCount - 1;
            let col1 = this.data.col1;
            let col2 = this.data.col2;
          
            //判断当前图片添加到左列还是右列
            if (col1.length <= col2.length) {
              col1.push(imageObj);
            } else {
              col2.push(imageObj);
            }
          
            let data = {
              loadingCount: loadingCount,
              col1: col1,
              col2: col2
            };
          
            //当前这组图片已加载完毕，则清空图片临时加载区域的内容
            if (!loadingCount) {
              data.images = [];
            }
          
            this.setData(data);
          },
          
          loadImages: function () {
            let images = [
              {
                goodId: 1,
                name: '透无瑕矿物养护两用粉饼#03',
                imageurl: '../../img/yxImg1.jpg',
                personUrl:'../../img/person.png',
                userName:"丝丝",
                starts: "88",
                height: 0,
              },
              {
                goodId: 2,
                name: '川水水光面膜（5片盒装）',
                url: 'bill',
                imageurl: '../../img/yxImg2.jpg',
                personUrl:'../../img/person.png',
                userName:"丝丝",
                starts: "88",
                height: 0, 
              },
              {
                goodId: 3,
                name: '蜜三色渐变咬唇膏3.2g 03蜜橙动心恋',
                imageurl: '../../img/yxImg3.jpg',
                personUrl:'../../img/person.png',
                userName:"丝丝",
                starts: "88",
                height: 0,
              },
              {
                goodId: 4,
                name: '时焕颜亮采套装',
                imageurl: '../../img/yxImg4.jpg',
                personUrl:'../../img/person.png',
                userName:"丝丝",
                starts: "88",
                height: 0,
              }
            ];
          
            let baseId = "img-" + (+new Date());
          
            for (let i = 0; i < images.length; i++) {
              images[i].id = baseId + "-" + i;
            }
          
            this.setData({
              loadingCount: images.length,
              images: images
            });
          },
    }
})
