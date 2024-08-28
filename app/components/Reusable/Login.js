import { SidebarClose } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../contextSlice";

function Login() {
  const isLogin = useSelector((state) => state.contextSlice.isLogin);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[1000] transform ${
          isLogin ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }  duration-700 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => dispatch(toggleLogin())}>
            <button
              class="relative border-2 border-[var(--brown-color)] group hover:[var(--brown-color)] w-12 h-12 duration-500 overflow-hidden"
              type="button"
            >
              <p class="font-Manrope text-3xl h-full w-full flex items-center justify-center text-white duration-500 relative z-10 group-hover:scale-50">
                ×
              </p>
              <span class="absolute w-full h-full bg-[var(--brown-color)] rotate-45 group-hover:top-9 duration-500 top-12 left-0"></span>
              <span class="absolute w-full h-full bg-[var(--brown-color)] rotate-45 top-0 group-hover:left-9 duration-500 left-12"></span>
              <span class="absolute w-full h-full bg-[var(--brown-color)] rotate-45 top-0 group-hover:right-9 duration-500 right-12"></span>
              <span class="absolute w-full h-full bg-[var(--brown-color)] rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0"></span>
            </button>
          </button>
        </div>

        <div className="flex justify-center mt-[-3rem] items-center h-full px-4">
          <div className="bg-white p-8 md:p-14 w-full max-w-lg rounded-3xl shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-3xl">
            <div className="space-y-6">
              <h1 className="font-extrabold text-2xl md:text-3xl text-center text-[var(--brown-color)]">
                Login
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    required
                    className="mt-1 block w-full p-3 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-[var(--brown-color)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password*"
                    required
                    className="mt-1 block w-full p-3 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-[var(--brown-color)]"
                  />
                </div>
              </div>

              <div className="pt-6 text-center">
                <button className="bg-[var(--brown-color)] hover:bg-opacity-90 text-white py-2 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                  Sign In
                </button>
              </div>
              <div>
                <p className="text-center text-black">
                  Don't have an account?{" "}
                  <span className="text-[var(--brown-color)] font-semibold">
                    Sign up here
                  </span>
                </p>
                <p className="underline text-black text-center">
                  Forgot Password ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
