export default function styleReducer(style, action) {
  switch (action.type) {
    case "formal":
      return {
        // dressCode === "formal" && ()
      };
    case "casual":
      return {
        ...style,
        dressCode: "casual",
      };
    case "sport":
      return {
        ...style,
        dressCode: "sport",
      };
    default:
      return style;
  }
}
