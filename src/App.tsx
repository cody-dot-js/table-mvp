function App() {
  return (
    <main>
      <div>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><code>100</code></th>
              <td>
                <div>AuthMetadataTooLong</div>
                <a href="https://www.ngrok.com/docs/errors/100.html">Learn more</a>
              </td>
              <td>{"Invalid metadata length: {val:int} bytes. Max: {max:int}"}</td>
            </tr>
            <tr>
              <th><code>102</code></th>
              <td>
                <div>AuthPaymentDue</div>
                <a href="https://www.ngrok.com/docs/errors/102.html">Learn more</a>
              </td>
              <td>{"The last payment for the '{account:string}' account failed."}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default App;
