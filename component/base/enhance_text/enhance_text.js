// component/base/enhance_text/enhance_text.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({
          mIcon: newVal
        });
      }
    },
    iconSize: {
      type: String,
      value: '38'
    },
    title: {
      type: String,
      value: ''
    },
    titleFontSize: {
      type: String,
      value: '28'
    },
    titleColor: {
      type: String,
      value: '#666',
      observer: function (newVal) {
        this.setData({
          mTitleColor: newVal
        });
      }
    },
    titleSpacing: {
      type: String,
      value: '10'
    },
    text: {
      type: String,
      value: '',
      observer: function (newVal) {
        this.setData({
          mText: newVal
        });
      }
    },
    textFontSize: {
      type: String,
      value: '28'
    },
    textColor: {
      type: String,
      value: '#666',
      observer: function (newVal) {
        this.setData({
          mTextColor: newVal
        });
      }
    },
    textSpacing: {
      type: String,
      value: '10'
    },
  },

  externalClasses: ['cus-component'],

  /**
   * 组件的初始数据
   */
  data: {
    mIcon: '',
    mTitleColor: '#666',
    mText: '',
    mTextColor: '#666'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      console.log('enhance_text点击事件触发');
      console.log(e);
      this.triggerEvent('texttap', e, { bubbles: true });
    }
  }
})
