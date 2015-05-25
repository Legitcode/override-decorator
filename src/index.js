export default function Override(target, name) {
  // IE < 11 doesn't properly support __proto__, so we have to manually walk
  // the superclass chain.
  let parent = target.__proto__;
  while (parent !== undefined) {
    if (parent[name] !== undefined) {
      throw new Error(`${name} does not override a member of its superclass`);
    }

    parent = parent.__proto__;
  }
}
