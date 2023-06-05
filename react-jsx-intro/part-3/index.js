const App = () => (
    <div>
        <Person name='Eduardo' age='26' hobbies={["Swim", "Soccer", "Fight"]} />
        <Person name='Aubrey' age='14' hobbies={["Crotchet", "Read", "Workout"]} />
        <Person name='Bartholomew' age='48' hobbies={["Buy", "Sell", "Build"]} />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));