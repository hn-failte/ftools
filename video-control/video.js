const Video = class {
    constructor({el, data, end, play, pause, loadstart}) {
        this.el = el;
        let {src, autoplay, loop, controls, muted, preload, poster, forbid} = data();
        if(!!src) this.el.src = src;
        this.el.autoplay = autoplay;
        this.el.loop = loop;
        this.el.controls = controls;
        this.el.muted = autoplay ? true : muted; //自动播放启用时，必须开启静音模式
        this.el.preload = preload;
        this.el.poster = poster;
        this.cbs = {end, play, pause};
        if(forbid) this.el.onseeking = (e) => {
            console.log('forbid')
            if(e.target.currentTime === 0) return;
            e.target.currentTime = 0;
            return false;
        }
        this.el.onloadstart = typeof loadstart === 'function' ? loadstart : () => {};
        this.el.ontimeupdate = () => {
            // console.log(this.getCurrentTime(), this.getStatus())
            if(this.getStatus() === 'ended') this.cbs.end();
        }
    };
    getLength() {
        return this.el.duration;
    };
    getStatus() {
        let status;
        if(this.el.error || isNaN(this.el.duration)) status = 'error';
        else status = this.el.ended ? 'ended' : this.el.paused ? 'paused' : 'playing';
        return status;
    };
    getCurrentTime() {
        return this.el.currentTime;
    };
    getVolume() {
        return this.el.volume;
    };
    getBufferedTime() {
        let startTime = 0;
        let endTime = 0;
        if(this.el.buffered.length > 0) {
            startTime = this.el.buffered.start(0);
            endTime = this.el.buffered.end(this.el.buffered.length - 1);
        }
        return {startTime, endTime};
    }
    toggleMuted() {
        this.el.muted = !this.el.muted;
    }
    play(cb) {
        if(this.getStatus() === 'playing') return 0;
        if(this.getStatus() != 'error') this.el.play().then(res => {
            if(cb) cb();
            else if(this.cbs.play) this.cbs.play();
        }).catch(err => {
            console.log(err)
        });
    };
    pause(cb) {
        if(this.getStatus() === 'pause') return 0;
        if(this.getStatus() != 'error') this.el.pause()
        if(cb) cb();
        else if(this.cbs.pause) this.cbs.pause();
    };
    stop(cb) {
        this.setTime(this.getLength());
        if(cb) cb();
    };
    setSrc(src) {
        if(!!src) {
            this.el.src = src;
        }
    };
    setTime(time) {
        if(this.getStatus() != 'error') this.el.currentTime = time
    };
    setVolume(volume) {
        this.el.volume = volume;
    }
    goFast(seconds) {
        let time = this.getCurrentTime() + seconds;
        if(time > this.getLength() ) time = this.getLength();
        this.setTime(time);
    };
    goSlow(seconds) {
        let time = this.getCurrentTime() - seconds;
        if(time < 0 ) time = 0;
        this.setTime(time);
    }
}
