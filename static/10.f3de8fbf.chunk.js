webpackJsonp([10],{2217:function(e,t,n){var o=n(0),s=n(94),r=n(467).PageRenderer;r.__esModule&&(r=r.default);var a=s({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2301)}},componentWillMount:function(){},render:function(){return o.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,e.exports=a},2301:function(e,t){e.exports="For the next major version of Styled UI, the SimpleToast component has been rebuilt to use Styled System primitives.\n\nYou can opt in to the new API now by importing `{ SimpleToast } from '@faithlife/styled-ui/v6'`. When v6 is released, the `/v6` entrypoint will continue to be supported with a deprecation warning until v7 is released.\n\n## v6 Simple Toast\n\nThe toast will appear differently for mobile and desktop. Try resizing the screen and refreshing.\n\nThe toast assumes that there will only be one toast on any page. Otherwise toasts will start to cover others in render order.\n\n```react\nshowSource: true\nstate: { number: 0 }\n---\n<ToastDemo>\n\t<Button onClick={() => toastRef.current.showMessage({ message: 'Hello!' })}>Hello!</Button>\n\t<Button onClick={() => toastRef.current.showMessage({ message: 'Hello w/ Icon!', icon: <LoadingSpinner small /> })}>Hello w/ Icon!</Button>\n\t<SimpleToast ref={toastRef} showTime={1000} />\n</ToastDemo>\n```\n"}});
//# sourceMappingURL=10.f3de8fbf.chunk.js.map