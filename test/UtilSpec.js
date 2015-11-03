import Util from '../lib/Util';

describe('Util', () => {

    let div;
    beforeEach(() => {
        document.body.innerHTML = __html__["test/fixtures/util.html"];
        div = document.getElementById('target');
    });

    afterEach(() => {
        document.body.innerHTML = "";
    });

    it('hasClass', () => {
        assert(Util.hasClass(div, 'hoge') === false);
        div.className = 'hoge';
        assert(Util.hasClass(div, 'foo') === false);
        assert(Util.hasClass(div, 'hoge') === true);
    });

    it('addClass', () => {
        Util.addClass(div, 'foo');
        assert(Util.hasClass(div, 'foo') === true);
    });

    it('removeClass', () => {
        div.className = 'bar';
        Util.removeClass(div, 'bar');
        assert(Util.hasClass(div, 'bar') === false);
    });
});