import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/layout"
import { mainPage } from "./routes/mainRoutes"
import { SingelProduct } from "./page/SingleProduct"
import { useGetAll } from "./redux/servise/All-api"
import { BrandPage } from "./page/BrandPage/brandPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {mainPage.map((route, i) => (
            <Route
              index={route.path ? true : false}
              key={i}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path="/single-product/:id" element={<SingelProduct />} />
          <Route path="/brand-page/:brand" element={<BrandPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
