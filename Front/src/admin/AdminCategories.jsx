import { Link } from "react-router-dom";
import { useEcom } from "../Context/EcomProvider";


function AdminCategories() {
  const { categories,deleteProductOrCategory } = useEcom();

  return (
    <div className="min-h-screen flex">
      <aside className="w-1/5 ml-3 p-2 bg-gray-200 rounded h-screen">
        <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
        <ul className="mt-4">
          <li className="py-2">
            <Link to="/admin/home">Dashboard</Link>
          </li>
          <li className="py-2">
            <Link to="">Products</Link>
          </li>
          <li className="py-2">
            <Link to="">Orders</Link>
          </li>
          <li className="py-2">
            <Link to="">Users</Link>
          </li>
        </ul>
      </aside>
      <main className="w-4/5 p-4">
        <h2 className="text-2xl font-bold mb-3">Categories</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th>Name</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, index) => {
              return (
                <tr
                  key={item._id}
                  className={`mb-2 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  }`}
                >
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">
                    <img src={item.image} className="w-[3rem]" />
                  </td>
                  <td>
                    <button className="bg-red-500 text-white p-1 rounded" onClick={()=>deleteProductOrCategory(item._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default AdminCategories;
