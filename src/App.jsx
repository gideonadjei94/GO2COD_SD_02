function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-8 shadow">
        {/* Buttons Row 1 */}
        <div className="flex justify-evenly gap-2 mb-2">
          <div className="size-20  flex items-center justify-center rounded-lg shadow font-semibold bg-orange-300">
            <input type="button" value="AC" />
          </div>
          <div className="size-20  flex items-center justify-center rounded-lg shadow font-semibold bg-red-300">
            <input type="button" value="DEL" />
          </div>
          <div className="size-20  flex items-center justify-center rounded-lg shadow font-semibold">
            <input type="button" value="%" />
          </div>
          <div className="size-20  flex items-center justify-center rounded-lg shadow bg-blue-100 font-bold">
            <input type="button" value="/" />
          </div>
        </div>

        {/* Buttons Row 2 */}
        <div className="flex justify-evenly gap-2 mb-2">
          <div className="size-20  flex items-center justify-center rounded-lg shadow font-semibold">
            <input type="button" value="7" />
          </div>
          <div className="size-20  flex items-center justify-center rounded-lg shadow font-semibold">
            <input type="button" value="8" />
          </div>
          <div className="size-20  flex items-center justify-center rounded-lg shadow font-semibold">
            <input type="button" value="9" />
          </div>
          <div className="size-20  flex items-center justify-center rounded-lg shadow bg-blue-100 font-bold">
            <input type="button" value="x" />
          </div>
        </div>

        {/* Buttons Row 3 */}
        <div className="flex justify-evenly gap-2 mb-2">
          <div className="size-20 shadow flex items-center justify-center rounded-lg font-semibold">
            <input type="button" value="4" />
          </div>
          <div className="size-20  flex items-center justify-center rounded-lg shadow font-semibold">
            <input type="button" value="5" />
          </div>
          <div className="size-20  flex items-center justify-center rounded-lg shadow font-semibold">
            <input type="button" value="6" />
          </div>
          <div className="size-20  flex items-center justify-center rounded-lg shadow bg-blue-100 font-bold">
            <input type="button" value="-" />
          </div>
        </div>

        {/* Buttons Row 4 */}
        <div className="flex justify-evenly gap-2 mb-2">
          <div className="size-20  flex items-center justify-center rounded-lg shadow font-semibold">
            <input type="button" value="1" />
          </div>
          <div className="size-20  flex items-center justify-center rounded-lg shadow font-semibold">
            <input type="button" value="2" />
          </div>
          <div className="size-20  flex items-center justify-center rounded-lg shadow font-semibold">
            <input type="button" value="3" />
          </div>
          <div className="size-20 flex items-center justify-center rounded-lg shadow bg-blue-100 font-bold">
            <input type="button" value="+" />
          </div>
        </div>

        {/* Buttons Row 5 */}
        <div className="flex justify-evenly gap-2">
          <div className="h-20 w-[164px]  flex items-center justify-center rounded-lg shadow font-semibold bg-orange-300">
            <input type="button" value="0" />
          </div>
          <div className="size-20  flex items-center justify-center rounded-lg shadow font-semibold">
            <input type="button" value="." />
          </div>
          <div className="size-20 flex items-center justify-center rounded-lg shadow bg-blue-100 font-bold">
            <input type="button" value="=" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
