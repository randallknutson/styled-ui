webpackJsonp([31],{2198:function(t,n,e){var o=e(0),a=e(94),l=e(467).PageRenderer;l.__esModule&&(l=l.default);var d=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(2282)}},componentWillMount:function(){},render:function(){return o.createElement(l,Object.assign({},this.props,{content:this.state.content}))}});d.__catalog_loader__=!0,t.exports=d},2282:function(t,n){t.exports='For the next major version of Styled-UI, the Modal component has been rebuilt to use styled-system primitives.\n\nYou can opt-in to the new API now by importing `{ Modal } from @faithlife/styled-ui/v6`\n\nWhen v6 is released, the `/v6` entrypoint will continue to be supported with a deprecation warning until v7 is released.\n\n## Possible polyfill requirements\n\nThis component assumes the availability of the following APIs, which may require polyfills in your application:\n\n- `ResizeObserver`\n\n## Modal with v6 API\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t>\n\t\t<Modal.Header title="Location" subtitle="Help us locate you" />\n\t\t<Modal.Content width={[\'100vw\', 400]}>\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value.value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t/>\n\t\t</Modal.Content>\n\t\t<Modal.Footer>\n\t\t\t<Modal.FooterButtons\n\t\t\t\tcommitButton={{ text: \'Save\', onClick: () => alert(\'Saved\') }}\n\t\t\t\tcancelButton={{ text: \'Cancel\', onClick: () => setState({ modal: !state.modal }) }}\n\t\t\t\tdeleteButton={{ text: \'Delete Forever\', onClick: () => alert(\'Deleted\') }}\n\t\t\t/>\n\t\t</Modal.Footer>\n\t</Modal>\n</div>\n```\n\n## Scrolling Modal with overflowing Dropdown\n\nThe modal will automatically scroll when content is longer than the page height\n\n```react\nshowSource: true\nstate: { modal: false, dropdown: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t>\n\t\t<Modal.Header title="Location" subtitle="Help us locate you" />\n\t\t<Modal.Content width={[\'100vw\', 475]}>\n\t\t\t{JSON.stringify(new Array(3000), null, \'\\t\')}\n\t\t\t<Dropdown isOpen={state.dropdown} onToggleMenu={() => setState({dropdown: !state.dropdown})}>\n\t\t\t\t<Dropdown.Toggle>Show a Dropdown!</Dropdown.Toggle>\n\t\t\t\t<Dropdown.Menu>\n\t\t\t\t\t<Dropdown.Item onClick={() => {}}>Banana</Dropdown.Item>\n\t\t\t\t\t<Dropdown.Item onClick={() => {}}>Banana</Dropdown.Item>\n\t\t\t\t\t<Dropdown.Item onClick={() => {}}>Banana</Dropdown.Item>\n\t\t\t\t\t<Dropdown.Item onClick={() => {}}>Banana</Dropdown.Item>\n\t\t\t\t\t<Dropdown.Item onClick={() => {}}>Banana</Dropdown.Item>\n\t\t\t\t\t<Dropdown.Item onClick={() => {}}>Banana</Dropdown.Item>\n\t\t\t\t\t<Dropdown.Item onClick={() => {}}>Orange you glad I didn\'t say "banana"?</Dropdown.Item>\n\t\t\t\t</Dropdown.Menu>\n\t\t\t</Dropdown>\n\t\t</Modal.Content>\n\t\t<Modal.Footer>\n\t\t\t<Modal.FooterButtons\n\t\t\t\tcommitButton={{ text: \'Save\', onClick: () => alert(\'Saved\') }}\n\t\t\t\tcancelButton={{ text: \'Cancel\', onClick: () => setState({ modal: !state.modal }) }}\n\t\t\t\tdeleteButton={{ text: \'Delete Forever\', onClick: () => alert(\'Deleted\') }}\n\t\t\t/>\n\t\t</Modal.Footer>\n\t</Modal>\n</div>\n```\n\n## Modal with 24px spacing and 24px title\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t\tcontentPadding={6}\n\t>\n\t\t<Modal.Header title="Location" subtitle="Help us locate you" textStyle={\'h.24\'} />\n\t\t<Modal.Content width={[\'100vw\', 400]}>\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value.value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t/>\n\t\t</Modal.Content>\n\t\t<Modal.Footer>\n\t\t\t<Modal.FooterButtons\n\t\t\t\tcommitButton={{ text: \'Save\', onClick: () => alert(\'Saved\') }}\n\t\t\t\tcancelButton={{ text: \'Cancel\', onClick: () => setState({ modal: !state.modal }) }}\n\t\t\t\tdeleteButton={{ text: \'Delete Forever\', onClick: () => alert(\'Deleted\') }}\n\t\t\t/>\n\t\t</Modal.Footer>\n\t</Modal>\n</div>\n```\n\n## Modal with 16px title\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t>\n\t\t<Modal.Header title="Location" subtitle="Help us locate you" textStyle={\'h.16\'} />\n\t\t<Modal.Content width={[\'100vw\', 400]}>\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value.value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t/>\n\t\t</Modal.Content>\n\t\t<Modal.Footer>\n\t\t\t<Modal.FooterButtons\n\t\t\t\tcommitButton={{ text: \'Save\', onClick: () => alert(\'Saved\') }}\n\t\t\t\tcancelButton={{ text: \'Cancel\', onClick: () => setState({ modal: !state.modal }) }}\n\t\t\t\tdeleteButton={{ text: \'Delete Forever\', onClick: () => alert(\'Deleted\') }}\n\t\t\t/>\n\t\t</Modal.Footer>\n\t</Modal>\n</div>\n```\n\n## Fullscreen modal with custom header actions\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t\tcontentPadding={6}\n\t\tfullscreen\n\t>\n\t\t<Modal.Header\n\t\t\ttitle="Fullscreen modal"\n\t\t\ttextStyle="h.24"\n\t\t\tmessage={`Autosaved at ${new Date().toString()}`}\n\t\t\tactions={<Box display="grid" gridAutoFlow="column" gridAutoColumns="min-content" gridGap={[3,5]}>\n\t\t\t\t<Button size={[\'medium\', \'small\']} minWidth={78} variant="secondary" onClick={() => setState({ modal: !state.modal })}>\n\t\t\t\t\tCancel\n\t\t\t\t</Button>\n\t\t\t\t<Button size={[\'medium\', \'small\']} minWidth={78} variant="primary" onClick={() => setState({ modal: !state.modal })}>\n\t\t\t\t\tSave\n\t\t\t\t</Button>\n\t\t\t</Box>}\n\t\t/>\n\t\t<Modal.Content\n\t\t\tpaddingX={0}\n\t\t\tpaddingBottom={0}\n\t\t>\n\t\t\t<Box\n\t\t\t\tbackgroundImage="url(https://www.bellinghamherald.com/news/local/l6de4z/picture53186905/alternates/LANDSCAPE_1140/Faithlife%201)"\n\t\t\t\tbackgroundSize="cover"\n\t\t\t\theight="100%"\n\t\t\t>\n\t\t\t\t&nbsp;\n\t\t\t</Box>\n\t\t</Modal.Content>\n\t</Modal>\n</div>\n```\n\n## Fullscreen modal with really long content\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t\tfullscreen\n\t>\n\t\t<Modal.Header title="Fullscreen modal" textStyle="h.24" />\n\t\t<Modal.Content overflowY="auto">\n\t\t\t{JSON.stringify(new Array(3000))}\n\t\t</Modal.Content>\n\t</Modal>\n</div>\n```\n'}});
//# sourceMappingURL=31.80a80ff3.chunk.js.map