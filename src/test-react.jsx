// emit react/jsx-no-comment-textnodes error
const component1 = <div>// incorrect comment</div>;

// emit react/no-unknown-property
const component2 = <div unknown="property" id="test"></div>;

console.log(component1, component2);
