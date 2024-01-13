const makeCapitalizeCase = (content: string) => {
  const arr = content.toLowerCase().split(" ");
  const capitalizedContentArr = arr.map(
    (stg) => stg.charAt(0).toUpperCase() + stg.slice(1)
  );
  const capitalizedContent = capitalizedContentArr.join(" ");
  return capitalizedContent;
};

export default makeCapitalizeCase;
