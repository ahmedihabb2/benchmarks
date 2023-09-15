window.BENCHMARK_DATA = {
  "lastUpdate": 1694787509328,
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
          "id": "781714caff07f5c217f0a3fd180b8128a9c311ac",
          "message": "Final Test pushing",
          "timestamp": "2023-09-15T17:15:12+03:00",
          "tree_id": "52580eb512c7b9e994519e98dff8e8bb4288e6f4",
          "url": "https://github.com/ahmedihabb2/core/commit/781714caff07f5c217f0a3fd180b8128a9c311ac"
        },
        "date": 1694787509325,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.7044010000072376,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.7045000000000002 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 63.837503000002016,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 60.29120000000001 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 162.10100000080274,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 162.20000000000124 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 9.165214000006472,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 8.856700000000009 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 54.501702000010255,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54.501000000000005 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 146.3181729999974,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 146.3007 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 282.30632899999364,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 281.8143 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 161.04206800000043,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 160.872 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 146.3181729999974,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 146.3007 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 114.61383788019977,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 114.35504438803737 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.7117012300177336,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.7108449225970794 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 462.4405650000085,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 462.1490000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 687.2722859999953,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 686.7465000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 956.7775910000194,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 955.7066000000003 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 702.1634806666743,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 701.5340333333334 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 687.2722859999953,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 686.7465000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 247.5047162734168,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 247.11086476722096 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.35248873387493973,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3522435876604242 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 819.5767469964323,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 823.8249000000017 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 824.4233550066724,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 827.936300000433 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 817.7812819973838,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 823.665500000129 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 818.6643490043366,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 823.776299998861 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 861.6929039995398,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 824.4357999991249 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 828.427727400873,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 824.7277599997099 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 819.5767469964323,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 823.8249000000017 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 18.772434471690048,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1.818570743604985 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.022660316465489494,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0022050558157586746 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1799.0088970000784,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1808.3937999999912 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1794.3567530030577,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1806.9124999999308 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1790.0402930085306,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1802.9583000001955 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1807.9958390001138,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1819.8988000002041 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1791.6446089874682,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1803.6535000002516 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1796.6092781998498,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1808.3633800001146 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1794.3567530030577,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1806.9124999999308 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 7.2160465948523465,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 6.829526926286343 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.004016480757620607,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0037766341664615603 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1670.3761530077088,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1681.3610000006563 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1671.0842109958435,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1683.0190999991626 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1672.4712929926397,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1684.9192000007492 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1660.2158570019014,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1672.2601999990231 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1653.9112480120082,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1666.1880999998502 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1665.6117524020203,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1677.5495199998884 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1670.3761530077088,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1681.3610000006563 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 8.150431023203494,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 7.997103209370417 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.0048933558564590775,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0047671339140980765 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1494.5064989983052,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 675.774500000004 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1472.4399900002254,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 673.2032999999777 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1471.0003489955454,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 671.5443000000183 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 1479.315612664692,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 673.5073666666666 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 1472.4399900002254,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 673.2032999999777 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 13.175371427627868,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 2.131429194994626 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.00890639652203431,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0031646709456847203 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1444.4644839972227,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 649.1089000000226 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1443.4045850009056,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 649.3999999999431 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1481.677671,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 649.0589000001341 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 1456.515579999376,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 649.1892666666998 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 1444.4644839972227,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 649.1089000000226 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 21.79745315657702,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.18420478645715577 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.01496547888391716,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0002837458903209629 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.003199999980552093,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.003500000000933312 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.002700000010236181,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0030000000013075123 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.002799999975877654,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0030000000021956907 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.0028999999888886427,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003166666668145505 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.002799999975877654,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0030000000021956907 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.00026457512077031575,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0002886751341223734 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.09123280061518485,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.09116056862765103 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1586.731230994559,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1575.7021000001885 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1578.2233350322485,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1572.1978999998526 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1603.3257109888837,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1573.354499999926 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1568.3423170000594,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1571.1449999998727 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1589.0638829987154,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1574.9983999996555 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1585.1372954028932,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1573.4795799998992 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1586.731230994559,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1573.354499999926 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 13.025468608712202,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1.894401076283009 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.008217249475163934,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0012039565688441475 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1433.4048999721176,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1427.4924999993282 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1502.3298299970804,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1470.8455000007543 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1428.9870300062546,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1426.726899998357 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1439.6407889751686,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1428.1133999996314 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1409.4495429959295,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1418.7189999982977 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1442.7624183893101,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1434.3794599992739 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1433.4048999721176,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1427.4924999993282 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 35.16067845923575,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 20.73811395328961 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.024370386982001432,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.014457899413381246 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}