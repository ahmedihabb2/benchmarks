window.BENCHMARK_DATA = {
  "lastUpdate": 1694818221875,
  "repoUrl": "https://github.com/ahmedihabb2/core",
  "entries": {
    "MetaCall Benchmark (ubuntu-latest)": [
      {
        "commit": {
          "author": {
            "email": "ahmed.ihab@dstny.com",
            "name": "AhmedIhab"
          },
          "committer": {
            "email": "ahmed.ihab@dstny.com",
            "name": "AhmedIhab"
          },
          "distinct": true,
          "id": "7a2eeab185adb7567f2046ebcc53788ab1383b3a",
          "message": "Fix pushing",
          "timestamp": "2023-09-16T01:47:01+03:00",
          "tree_id": "43da4f2ae490123a34b98f4e42f60d59ae937f30",
          "url": "https://github.com/ahmedihabb2/core/commit/7a2eeab185adb7567f2046ebcc53788ab1383b3a"
        },
        "date": 1694818221870,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.7175920000577207,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.7175000000000002 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 60.52546300003314,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 60.0723 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 153.69900000905545,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 153.89999999999847 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 9.181503000036173,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 8.909799999999995 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 54.81782200001817,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54.80500000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 147.19144800000095,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 147.17260000000002 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 283.7507090000031,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 283.17330000000004 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 161.9199930000074,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 161.71696666666668 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 147.19144800000095,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 147.17260000000002 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 115.1749287644663,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 114.87677773389767 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.71130764416758,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.7103569903749389 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 464.272305999998,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 463.62210000000005 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 693.4646889999954,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 691.7769999999999 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 966.0229169999752,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 963.0109999999999 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 707.9199706666562,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 706.1366999999997 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 693.4646889999954,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 691.7769999999999 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 251.18745049416702,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 250.003938166722 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.3548246424770599,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3540446745888184 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 822.1929930071497,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 827.6871000000099 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 850.215841993645,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 827.9977999998931 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 823.433678010872,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 828.3493000020324 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 821.5144659962448,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 826.8331999996548 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 822.5895719756977,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 827.7552000034563 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 827.9893101967218,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 827.7245200010093 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 822.5895719756976,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 827.7552000034563 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 12.444382001230085,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.5616548920950108 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.015029640899921072,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.00067855292252829 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1878.7131989818704,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1882.645900000011 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1866.5454090192384,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1875.489700000205 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1871.7642549852371,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1880.600299999327 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1870.859873002587,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1879.8891999991483 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1875.5932250255114,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1882.8589000005156 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1872.6951922028888,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1880.2967999998414 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1871.7642549852371,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1880.6002999993266 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 4.654832803301244,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2.9769568199748027 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.0024856329116889927,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0015832377207550708 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1708.4428469971726,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1719.4562000006551 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1714.8191140112772,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1725.4996999998084 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1714.788326021619,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1725.7218000019172 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1712.3668359969884,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1723.2079999989587 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1714.4857689852415,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1724.2954000018465 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1712.9805784024597,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1723.6362200006374 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1714.4857689852415,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1724.2954000018465 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 2.7331963602566143,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2.545223933955475 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.0015955793047026932,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0014766595784083338 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1504.683726000394,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 677.4985000000268 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1485.3894820126357,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 674.9280999999746 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1491.0201300181711,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 674.0816000000027 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 1493.6977793437336,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 675.5027333333346 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 1491.0201300181714,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 674.9280999999746 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 9.921910965001164,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1.7794532878341087 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.0066425157098114074,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0026342651184447794 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1529.4372490068326,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 656.2889000000612 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1458.1940239905293,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 653.099399999963 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1459.8853889843326,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 652.8670000000396 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 1482.5055539938983,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 654.0851000000212 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 1459.8853889843328,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 653.099399999963 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 40.65283725001251,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1.912080874391129 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.027421709915684964,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0029232906763830384 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.00310000001491062,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.003000000000419334 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.002900000026784255,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0029999999995311555 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.002900000026784255,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0028999999983625457 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.0029666666894930436,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002966666666104345 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.002900000026784255,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0029999999995311555 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.00011547004698267748,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0000577350278500274 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.03892248744748926,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.01946124534639468 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1481.9499250131685,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1480.7971999999904 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1502.4204430239934,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1482.7108000000208 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1477.511519996824,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1482.9521000000047 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1475.5869169849802,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1481.6511000002297 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1485.2540429992587,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1481.1094000001149 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1484.544569603645,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1481.8441200000723 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1481.9499250131685,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1481.6511000002297 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 10.682763111644359,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.9554927508497941 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.007195986789737492,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0006447997720905674 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1352.1287340124672,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1355.9868999995306 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1367.9797209923095,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1360.3426999996523 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1428.500964000591,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1388.430599999662 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1369.4933640081217,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1358.6607999988587 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1372.3056340297717,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1356.8172999998503 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1378.0816834086522,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1364.0476599995106 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1369.4933640081217,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1358.6607999988587 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 29.261028087648477,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 13.734324790654899 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.021233159427293178,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.010068801254832858 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}