import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public userData: any = [
    {
      userName: "Sreehari", userId: "@sree1149", desc: "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries.",
      img:
      [
        {
          image:
            "https://cdn.vox-cdn.com/thumbor/O3bgH4_QEuaBXQFpEAxr2HUeWVY=/0x0:5472x3648/1200x800/filters:focal(2299x1387:3173x2261)/cdn.vox-cdn.com/uploads/chorus_image/image/66982287/AdobeStock_245734346.0.0.jpeg",
          thumbImage:
            "https://cdn.vox-cdn.com/thumbor/O3bgH4_QEuaBXQFpEAxr2HUeWVY=/0x0:5472x3648/1200x800/filters:focal(2299x1387:3173x2261)/cdn.vox-cdn.com/uploads/chorus_image/image/66982287/AdobeStock_245734346.0.0.jpeg",
        },
        {
          image:"https://cdn.vox-cdn.com/thumbor/M-wbiTO8x-o-___R-bTsm0z445E=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20050614/AdobeStock_215336758.0.jpeg",
          thumbImage:"https://cdn.vox-cdn.com/thumbor/M-wbiTO8x-o-___R-bTsm0z445E=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20050614/AdobeStock_215336758.0.jpeg"
        },
        {
          image:"https://images.theconversation.com/files/227374/original/file-20180712-27021-7iamol.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
          thumbImage:"https://images.theconversation.com/files/227374/original/file-20180712-27021-7iamol.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
        }
      ],
      profile:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
    },

    {
      userName: "Raghupathi", userId: "@raghu0699", 
      desc:"Cotton is a soft, fluffy staple fiber that grows in a boll, or protective case, around the seeds of the cotton plants of the genus Gossypium in the mallow family Malvaceae. The fiber is almost pure cellulose, and can contain minor.",
      img:[
        {
          image:"https://cottonaustralia.com.au/assets/general/Landscapes-images/_boxLayoutImage/Cotton-bolls-and-blue-sky.jpg",
          thumbImage:"https://cottonaustralia.com.au/assets/general/Landscapes-images/_boxLayoutImage/Cotton-bolls-and-blue-sky.jpg"
        },
        {
          image:"https://trc-leiden.nl/trc-needles/media/k2/items/cache/433b44ac07b69aee9de9d3f0c3e72bd0_XL.jpg",
          thumbImage:"https://trc-leiden.nl/trc-needles/media/k2/items/cache/433b44ac07b69aee9de9d3f0c3e72bd0_XL.jpg"
        },
        {
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/CottonPlant.JPG/1200px-CottonPlant.JPG",
          thumbImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/CottonPlant.JPG/1200px-CottonPlant.JPG"
        }
      ],profile:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
    },
    {
      userName: "Venkatesh", userId: "@venky6123", 
      desc: "The peanut, also known as the groundnut, goober, pindar or monkey nut, classified as Arachis hypogaea, is a legume crop grown mainly for its edible seeds. It is widely grown in the tropics and subtropics.",
      img:[
        {
          image:"https://i.ytimg.com/vi/RsByZ_DbdKc/maxresdefault.jpg",
          thumbImage:"https://i.ytimg.com/vi/RsByZ_DbdKc/maxresdefault.jpg"
        },
        {
          image:"https://www.freshboxx.co.in/wp-content/uploads/2020/06/Ground-nuts.jpg",
          thumbImage:"https://www.freshboxx.co.in/wp-content/uploads/2020/06/Ground-nuts.jpg"
        },
        {
          image:"https://kj1bcdn.b-cdn.net/media/24665/nut.jpg?format=webp&width=1080&upscale=false",
          thumbImage:"https://kj1bcdn.b-cdn.net/media/24665/nut.jpg?format=webp&width=1080&upscale=false"
        }
      ]
      ,profile:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
    },
    {
      userName: "Sreenivas", userId: "@srinu007", 
      desc: "Red bananas are a group of varieties of banana with reddish-purple skin. Some are smaller and plumper than the common Cavendish banana, others much larger.",
      img:[
        {
          image:"https://1.bp.blogspot.com/-bv4mdQ7XQXg/XiL35yzgnOI/AAAAAAAAC_c/rq1URx9s4gIvCBSnWbPI_FpahnV9ybv_QCLcBGAsYHQ/s1600/Banana%2BCrop.jpeg"
          ,
          thumbImage:"https://1.bp.blogspot.com/-bv4mdQ7XQXg/XiL35yzgnOI/AAAAAAAAC_c/rq1URx9s4gIvCBSnWbPI_FpahnV9ybv_QCLcBGAsYHQ/s1600/Banana%2BCrop.jpeg"
        },
        {
          image:"https://gardenerspath.com/wp-content/uploads/2019/12/Banana-Plant-with-Ripe-Fruit.jpg",
          thumbImage:"https://gardenerspath.com/wp-content/uploads/2019/12/Banana-Plant-with-Ripe-Fruit.jpg"
        },
        {
          image:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/09/blue-java-bananas-1296x728-header-1296x728.jpg?w=1155&h=1528",
          thumbImage:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/09/blue-java-bananas-1296x728-header-1296x728.jpg?w=1155&h=1528"
        }
      ],
      profile:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
    }
  ]

  ngOnInit(): void {
    console.log("Len:::", typeof(this.userData[0].img), typeof(this.userData[1].img))
  }

}
