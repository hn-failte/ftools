# video-control

用法介绍：
```js
import { Video } from 'video';

var video = new Video({
  el: document.getElementById("video"),
  data() {
    return {
      src: "./public/video.mp4",
      autoplay: false, //自动播放，启用时，必须配合静音模式
      loop: false, //循环模式
      controls: false, //控制条显示
      muted: false, //静音模式
      forbid: true, //禁止模式，不允许操作播放进度
      preload: 'metadata', //预加载，metadata为加载元数据，none为不预加载，auto为预加载
      poster: '' //预览图
    };
  },
  pause() {
    console.log("paused");
  },
  play() {
    console.log("played");
  },
  end() {
    console.log("ended");
  }
});
```