import { FunctionalComponent, h } from "preact";
import style from "./style.css";

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>

      <form>
        <fieldset>
          <legend>Time</legend>
          <p>
            <label for="hour">Hour</label>
            <input type="number" name="hour" id="hour" min="1" />

            <label for="minute">Minute</label>
            <input type="number" name="minute" id="minute" min="1" max="59" />

            <label for="seconds">Seconds</label>
            <input type="number" name="seconds" id="seconds" min="1" max="59" />
          </p>
        </fieldset>

        <label for="activity">Activity</label>
        <input
          type="text"
          id="activity"
          name="activity"
          placeholder="E.g. Research, Meeting, ..."
          spellCheck={true}
          minLength={1}
        />

        <label for="project">Project</label>
        <input
          type="text"
          id="project"
          name="project"
          placeholder="E.g. Website Redesign, Logo Design, ..."
          spellCheck={true}
          minLength={1}
        />

        <label for="start">Date</label>
        <input type="date" id="date" name="date" />

        <label for="time">Time</label>
        <input type="time" id="time" name="time" />
      </form>
    </div>
  );
};

export default Home;
