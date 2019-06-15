import Index from "./";

describe("Index file", () => {
  it("renders the index file without crashing", () => {
    expect(
      JSON.stringify(
        Object.assign({}, Index, { _reactInternalInstance: "censored" }),
      ),
    ).toMatchSnapshot();
  });
});
