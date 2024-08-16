import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((data) => {
        // Add some duplicates for testing purposes
        let arrObj = [
          { "userId": 1, "id": 1, "title": "quidem molestiae enim" },
          { "userId": 1, "id": 2, "title": "sunt qui excepturi placeat culpa" },
          { "userId": 1, "id": 3, "title": "omnis laborum odio" },
          { "userId": 1, "id": 4, "title": "non esse culpa molestiae omnis sed optio" },
          { "userId": 1, "id": 4, "title": "non esse culpa molestiae omnis sed optio" },
          { "userId": 1, "id": 4, "title": "non esse culpa molestiae omnis sed optio" },
          { "userId": 1, "id": 4, "title": "non esse culpa molestiae omnis sed optio" },
          { "userId": 1, "id": 5, "title": "eaque aut omnis a" },
          { "userId": 1, "id": 5, "title": "eaque aut omnis a" },
          { "userId": 1, "id": 6, "title": "natus impedit quibusdam illo est" },
          { "userId": 1, "id": 7, "title": "quibusdam autem aliquid et et quia" },
          { "userId": 1, "id": 8, "title": "qui fuga est a eum" },
          { "userId": 1, "id": 8, "title": "qui fuga est a eum" },
          { "userId": 1, "id": 8, "title": "qui fuga est a eum" },
          { "userId": 1, "id": 8, "title": "qui fuga est a eum" },
          { "userId": 1, "id": 8, "title": "qui fuga est a eum" },
          { "userId": 1, "id": 8, "title": "qui fuga est a eum" },
          { "userId": 1, "id": 8, "title": "qui fuga est a eum" },
          { "userId": 1, "id": 8, "title": "qui fuga est a eum" },
          { "userId": 1, "id": 8, "title": "qui fuga est a eum" },
          { "userId": 1, "id": 8, "title": "qui fuga est a eum" },
          { "userId": 1, "id": 8, "title": "qui fuga est a eum" },
          { "userId": 1, "id": 8, "title": "qui fuga est a eum" },
        ];
        data.push(...arrObj);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const titleCounts = data.reduce((acc, item) => {
    acc[item.title] = (acc[item.title] || 0) + 1;
    return acc;
  }, {});

  const distinctTitles = Object.entries(titleCounts);

  return (
    <>
      <div className='container mt-5 p-4' style={{ background: 'rgb(204, 255, 204)' }}>
        <h4 className='text-center'><u>Senwell Group Private Limited Task</u></h4>
        <p>here are 100 recored with duplicate name <br /><br />

          Task is:-<br /><br />

          1 - take data from the any mock service with rxjs observable stream<br /><br />

          2 - Have the distinct name in table<br /><br />

          3 - Table will have 2 columns, one is for the name and another for the number of times it was duplicated<br /><br />

          4 - mark the background of that row red if the duplicates are more than 0 and less 3<br /><br />

          5 - mark row yellow if more than 2 and less than 10<br /><br />

          6 -Mark green if more than 10 times
          <div class="scroll-down">
            <span>Scroll Down</span>
            <span>⬇️</span>
          </div>
        </p>
      </div>
      <div className='container mt-5'>
        <h5 className='text-center'>Albums Data</h5>
        <table className='table table-bordered mt-3'>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>Number of times</th>
            </tr>
          </thead>
          <tbody>
            {
              distinctTitles.map(([title, count], index) => (
                <tr
                  key={index}
                  style={{
                    background: count > 10 ? 'green' : count >= 3 ? 'yellow' : count > 0 ? 'red' : ''
                  }}
                >
                  <td className='text-'>{index + 1}</td>
                  <td className='text-'>{title}</td>
                  <td className='text-'>{count}</td>
                </tr>

              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
