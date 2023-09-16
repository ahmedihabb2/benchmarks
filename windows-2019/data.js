window.BENCHMARK_DATA = {
  "lastUpdate": 1694823387805,
  "repoUrl": "https://github.com/ahmedihabb2/core",
  "entries": {
    "MetaCall Benchmark (windows-2019)": [
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
          "id": "b88a018e00505ac5e850cdca41dc1ca9dbe245d3",
          "message": "Remove unneeded steps",
          "timestamp": "2023-09-16T03:06:00+03:00",
          "tree_id": "b208b8a54b718d62bb77e87322b8ccdc809c5fff",
          "url": "https://github.com/ahmedihabb2/core/commit/b88a018e00505ac5e850cdca41dc1ca9dbe245d3"
        },
        "date": 1694822830194,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1/threads:1",
            "value": 0.8567439999751514,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.6397919999999997 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1/threads:1",
            "value": 118.19833499976085,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 73.44904700000001 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1/threads:1",
            "value": 160.6899986654753,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 160.7450000000038 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1/threads:1",
            "value": 23.57212700007949,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10.485694000000004 ms\nthreads: 1"
          }
        ]
      },
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
          "id": "7f86622d2ab65b8f08aaaf41ac031d60427b2a28",
          "message": "Final test",
          "timestamp": "2023-09-16T03:08:54+03:00",
          "tree_id": "84411ded3ac5e4638721cab4c10aa1c814d4f5c8",
          "url": "https://github.com/ahmedihabb2/core/commit/7f86622d2ab65b8f08aaaf41ac031d60427b2a28"
        },
        "date": 1694823384919,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 83.62319999991996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 93.75 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 230.97410000002583,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 234.375 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 457.5396999999839,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 453.125 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 257.37899999997654,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 260.41666666666663 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 230.97410000002583,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 234.375 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 188.3515364977945,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 181.09727761160119 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.7318061555053508,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.6954135460285487 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 777.0993000000317,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 781.25 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1165.252599999917,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1156.25 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1874.1283000000521,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1640.625 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 1272.1600666666668,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1192.7083333333333 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 1165.252599999917,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1156.25 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 556.2733694255807,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 430.84597620069894 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.437266806277874,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.36123330755691796 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2528.3970999913663,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2171.875 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 4110.1254999838375,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2015.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2834.961900001872,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2156.25 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 3157.828166659025,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 2114.583333333333 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 2834.961900001872,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 2156.25 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 838.8373814062729,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 86.05578980135395 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.2656374372307157,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.04069633409325114 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2925.4565000200046,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1937.5 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2526.8540000093935,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2046.875 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2473.1253999957516,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1953.125 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 2641.81196667505,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1979.1666666666667 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 2526.8540000093935,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1953.125 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 247.107985680785,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 59.1552952687616 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.0935373102998666,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.029888991293690076 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0043999999661537,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0030999998443803634,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0036000000136482413,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.003699999941394102,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.0036000000136482413,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.0006557439045195607,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.17722808510977617,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 510.88239999137386,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 515.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 510.02610001000903,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 500 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 523.3033000026808,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 546.875 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 617.1079999871836,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 562.5 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 526.154100040003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 468.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 537.49478000625,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 518.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 523.3033000026808,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 515.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 45.08608730338331,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 37.304176207227975 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.08388190728635361,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.07191166497778886 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3461.1749999979793,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3328.125 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3888.644399989971,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3406.25 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3377.3032999990846,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3390.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3299.595399969462,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3359.375 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3301.46790008439,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3203.125 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 3465.637200008177,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3337.5 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 3377.303299999084,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3359.375 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 245.60095620423698,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 80.88861940964559 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.07086747458841261,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.024236290459818895 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2611.603500013416,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2609.375 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2609.6838999965257,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2812.5 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2612.124299934976,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2625 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2615.0410001291675,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2578.125 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2725.4651000190506,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2750 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 2634.783560018627,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2675.0000000000005 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 2612.124299934976,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2625 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 50.728839308731594,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 100.89927681851375 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.019253512917916094,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.037719355820005136 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 3.6132000000179687,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 277.2930000000997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 265.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 549.2999999887616,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 35.62560000000303,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 31.25 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2831.835599903229,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2671.875 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2838.776500045583,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2984.375 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2850.2876999599494,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2734.375 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2832.4399000021003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2593.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2838.3067000514757,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2875 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 2838.329279992468,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2771.875 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 2838.3067000514757,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2734.375 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 7.417159185123431,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 157.2623455010775 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.0026132130748209434,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0567350062687089 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2220.7311999927697,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2156.25 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2227.0784999706166,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2390.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2217.698299939457,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2281.25 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2224.5667999973193,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2140.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2221.9527999620823,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2343.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 2222.405519972449,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2262.5 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 2221.9527999620823,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2281.25 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 3.594234850944056,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 111.25614449323366 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.0016172722838578145,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.04917398651634637 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}