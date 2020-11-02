var arrSrc0 = [{
    id: '1',
    src: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/bheem-1587140649.jpg'
},
{
    id: '2',
    src: 'https://m.economictimes.com/thumb/msid-76217463,width-1200,height-900,resizemode-4,imgsize-463661/bheem-chose-princess-indumati-a-village-belle-over-his-best-friend-chutki-who-did-so-much-for-him-.jpg'
},
{
    id: '3',
    src: 'https://images.indianexpress.com/2020/06/chhota-bheem-1200.jpg'
},
{
    id: '4',
    src: 'https://imgk.timesnownews.com/story/chhota_bheem_and_chutki.jpg?tr=w-1200,h-900'
}
]

var arrSrc1 = [{
    id: '1',
    src: 'https://toppng.com/uploads/preview/jerry-tom-and-jerry-11530965003zzgf53qoo0.png'
},
{
    id: '2',
    src: 'https://lh3.googleusercontent.com/proxy/_LCyV2qMH91folmhN1RI_svlNNiChGGOXJEDTXbBkehazZnQPu-49KMAzhC9OuQkfnWwFDTfnt39C5neLB4jgr0b'
},
{
    id: '3',
    src: 'https://projectdot.info/wp-content/uploads/2020/04/jerry-tom-and-drawing-cartoon-image-inspirations-images-pic-1024x1284.png'
},
{
    id: '4',
    src: 'https://lh3.googleusercontent.com/proxy/b03U6ABQ1FudV8PfSJONogoYmyVZ4FBiRcOgHAXdiQQi4ysUAKQQqKUwmEJ3hNsX5cc-1gHdyZP70LuuNhNVMrr8Ryh0UJmBShmFciOTjCPSASlrli_lHq7ZH_2VSSCaI4EuX7U'
}
];

let times = 2;
for (let i = 0; i < times; i++) {
let dynamicHtml = "<div class='box clickImgBox' data-toggle='modal' data-target='#img1'><div class='video_frame one" + i + "'><img src='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/bheem-1587140649.jpg' class='img-fluid'/><div class='action_wrapper'> <i class='fa fa-window-maximize modal_view'></i></div></div></div>"
$('#video-container').append(dynamicHtml);
}
$('.video_frame.one0').attr('data-src', JSON.stringify(arrSrc0));
$('.video_frame.one1').attr('data-src', JSON.stringify(arrSrc1));


$('.video_frame').each(function () {
let src_data = $(this).data('src');
console.log(src_data);
var img_src, count = 0,
    img_elem = $(this).find('img');
setInterval(function () {
    if (count < src_data.length) {
        img_src = src_data[count].src;
        img_elem.attr('src', img_src);
        count++;
    } else {
        count = 0;
    }
}, 100);
});
var handle;
$('.clickImgBox').on('click', function () {
var img_src, count = 0,
    modal_src = [];
modal_src = $(this).find('.video_frame').data('src');
console.log(img_src);
handle = setInterval(function test1() {
    console.log(modal_src);
    if (count < modal_src.length) {
        img_src = modal_src[count].src;
        $('.modal-body').find('img').attr('src', img_src);
        count++;
    } else {
        count = 0;
    }
}, 100);
})
$('#img1').on('hidden.bs.modal', function (e) {
 clearInterval(handle);
})