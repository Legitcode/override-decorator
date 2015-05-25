export default function Override(target, name) {
  if (Object.getPrototypeOf(target)[name] === undefined) {
    throw new Error(`${name} does not override a member of its superclass`);
  }
}
