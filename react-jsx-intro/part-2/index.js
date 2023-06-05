const App = () => (
    <div>
        <Tweet username='Eddie' name='Eduardo' message='The puppies pissed off mom' date='06/01/2023' />
        <Tweet username='Aub' name='Aubrey' message='The puppies pissed me off' date='06/01/2023' />
        <Tweet username='Mom' name='Kelly' message='The puppies are angels' date='06/01/2023' />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));