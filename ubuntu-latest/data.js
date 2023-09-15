window.BENCHMARK_DATA = {
  "lastUpdate": 1694818955167,
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
          "id": "a8e18b95fe5e412d4cb68c93c0dd3d12436e0230",
          "message": "Fix pushing",
          "timestamp": "2023-09-16T01:59:34+03:00",
          "tree_id": "b956dd457aa6d28b1b919c871d5254177911fcfb",
          "url": "https://github.com/ahmedihabb2/core/commit/a8e18b95fe5e412d4cb68c93c0dd3d12436e0230"
        },
        "date": 1694818955163,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.7711119999953553,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.7713 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 62.63561099999038,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 61.8385 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 169.30200001752382,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 169.40000000000012 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 10.239348999988351,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9.878300000000007 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 54.09599600000092,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 53.780100000000004 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 144.52722699999754,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 143.9135 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 279.75361700001145,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 279.5762 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 159.45894666666996,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 159.08993333333333 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 144.52722699999754,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 143.9135 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 113.56741463993608,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 113.66051552911124 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.7122047211144276,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.7144419080933546 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 460.8206810000013,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 458.68320000000006 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 687.2060130000079,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 681.4526 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 956.899481999983,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 948.0825 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 701.6420586666641,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 696.0727666666667 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 687.2060130000078,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 681.4526 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 248.35427067248534,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 245.02699986969483 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.3539614930502241,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.35201348422676143 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 778.7500640060898,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 769.2635999999632 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 766.677195008242,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 769.4417000000577 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 769.4391380010757,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 769.9858999999103 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 767.578519000665,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 770.928799999794 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 766.5560849993369,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 770.1027999997896 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 769.8002002030819,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 769.944559999903 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 767.578519000665,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 769.9858999999103 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 5.134290123097553,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.6542270192272872 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.006669639890640545,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0008497066583954689 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1794.7336299837389,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1751.996099999619 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1678.565971975928,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1684.0784999995387 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1670.0100970086567,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1677.8395000003181 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1675.5109709925762,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1682.1317999998832 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1670.8360940111504,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1678.5278999999528 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1697.93135279441,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1694.9147599998626 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1675.510970992576,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1682.1317999998832 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 54.22665842693768,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 32.01250403369715 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.031936896823121196,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.018887382887443696 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1538.2107400139375,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1545.8652000006002 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1539.4909029947712,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1546.52199999963 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1538.1716789925122,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1545.7230999999324 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1537.1735719980109,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1544.7762999996116 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1535.4179170059865,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1542.9010999993516 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1537.6929622010439,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1545.157539999825 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1538.1716789925122,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1545.7230999999324 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 1.5145503911771088,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1.4070587489649218 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.0009849498101423258,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0009106247826128338 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1519.2538450078814,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 666.3570000000069 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1494.083943003318,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 664.1565000000155 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1528.0177939970656,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 673.7407000000264 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 1513.785194002755,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 668.0847333333496 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 1519.2538450078816,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 666.3570000000069 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 17.615509322141172,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 5.020260876013449 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.011636729829258136,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00751440741800116 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1476.6189360002215,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 646.8095000000101 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1473.934320997813,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 647.6593999999758 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1484.4870820033407,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 649.2007000001712 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 1478.346779667125,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 647.8898666667191 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 1476.6189360002215,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 647.6593999999758 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 5.484457494916909,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1.2121450092701385 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.003709858586868115,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.001870912128177609 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0028999999983625457,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0028000000007466497 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0030000000208474376,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.003099999999811587 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0026000000161729986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0025999999992976086 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.0028333333451276608,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0028333333332852817 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.0028999999983625457,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0028000000007466497 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.00020816659896592932,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00025166114801870447 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.07347056403508004,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.08882158165516675 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1447.7984309865803,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1447.7529000000106 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1483.3870769829787,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1451.191500000205 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1490.3654189927238,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1453.7305000000745 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1497.4235199895816,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1467.8259999999507 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1450.8645080115627,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1446.744200000026 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1473.9677909926854,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1453.4490200000532 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1483.3870769829787,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1451.191500000205 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 23.056308588989356,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 8.50402222107993 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.015642342207126132,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.005850925697469331 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1307.8378280126515,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1315.1172999991497 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1335.665751016819,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1329.4081999994153 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1393.3809989928534,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1364.7487000032897 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1310.8559880308235,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1322.8712999992993 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1317.7329529909514,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1322.4971000000564 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1333.09470380882,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1330.928520000242 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1317.7329529909514,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1322.8712999992993 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 35.3889153316008,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 19.571141149851513 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.02654643757153202,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.014704877726902984 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}