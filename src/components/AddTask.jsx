import { useState } from 'react';

function AddTask({ onAdd }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form action="none" className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <div className="form-control">
          <label htmlFor="addTask">
            Task
            <input type="text" required id="addTask" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="addDateTime">
            Day & Time
            <input type="text" required id="addDateTime" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
          </label>
        </div>
        <div className="form-control form-control-check">
          <label htmlFor="setReminder" style={{ display: 'inline-flex' }}>
            Set Reminder
            <input type="checkbox" checked={reminder} id="setReminder" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
          </label>
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </div>
    </form>
  );
}

export default AddTask;
