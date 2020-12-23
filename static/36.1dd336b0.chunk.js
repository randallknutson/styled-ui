webpackJsonp([36],{2192:function(t,e,n){var o=n(0),s=n(94),i=n(467).PageRenderer;i.__esModule&&(i=i.default);var r=s({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2276)}},componentWillMount:function(){},render:function(){return o.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,t.exports=r},2276:function(t,e){t.exports='## Listbox\n\nA list box should be used in situations simmilar to a html select. Refer to the dropdown docs for more info on varriations.\n\n```react\nshowSource: true\nstate: { isOpen: false, selected: 0 }\n---\n<ListboxDemo>\n\t<Label id="listboxLabel">Pick your favorite browser:</Label>\n\t<Listbox\n\t\tisOpen={state.isOpen}\n\t\tonItemSelect={id => setState({ selected: id })}\n\t\tselectedId={state.selected}\n\t\tonToggleMenu={() => setState({ isOpen: !state.isOpen })}\n\t\tlabelledBy="listboxLabel"\n\t>\n\t\t<ListboxToggle primary medium icon={<ChevronDown color="white" />} styleOverrides={{width: \'100px\'}}>{browserList[state.selected]}</ListboxToggle>\n\t\t<ListboxMenu>\n\t\t\t{browserList.map((name, index) => <ListItem id={index}>{name}</ListItem>)}\n\t\t\t<ListItem id="ie" disabled>Internet Explorer</ListItem>\n\t\t</ListboxMenu>\n\t</Listbox>\n</ListboxDemo>\n```\n'}});
//# sourceMappingURL=36.1dd336b0.chunk.js.map