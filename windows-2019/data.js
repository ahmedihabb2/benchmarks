window.BENCHMARK_DATA = {
  "lastUpdate": 1694864330546,
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
      },
      {
        "commit": {
          "author": {
            "email": "57008633+ahmedihabb2@users.noreply.github.com",
            "name": "Ahmed Ihab",
            "username": "ahmedihabb2"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87c007db4bdd69cdd0f7259a4540122bd0b6d6f6",
          "message": "Update benchmarks CI to push to another repo",
          "timestamp": "2023-09-16T14:32:17+03:00",
          "tree_id": "bef4877286463495421ccb367b621c53b976f89a",
          "url": "https://github.com/ahmedihabb2/core/commit/87c007db4bdd69cdd0f7259a4540122bd0b6d6f6"
        },
        "date": 1694864328485,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 97.40089999991142,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 93.75 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 272.16020000014396,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 265.625 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 535.7903000001443,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 531.25 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 301.78380000006655,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 296.875 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 272.16020000014396,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 265.625 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 220.69092588019464,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 220.41774968227944 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.7312881800817207,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.7424597884034675 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 929.5893999999407,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 921.875 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1503.764799999999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1390.625 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1925.1622999997835,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1921.875 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 1452.8388333332412,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1411.4583333333333 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 1503.764799999999,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1390.625 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 499.7363708639105,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 500.3254149384511 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.3439723384302496,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.35447409471654107 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 7684.516599972767,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 6968.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 8197.411699969734,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 7093.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 7601.442500069197,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 7250 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 7827.790266670566,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 7104.166666666667 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 7684.516599972766,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 7093.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 322.7852683817675,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 140.91405477574907 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.04123580951780653,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.019835409469900162 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 7553.182499995728,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 6906.25 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 7488.64930004811,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 6828.125 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 7569.519699948842,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 6875 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 7537.117166664226,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 6869.791666666667 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 7553.182499995728,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 6875 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 42.761859130987204,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 39.322054350488955 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.005673503301781991,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00572390783570423 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.011300000096525764,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.00280000017482962,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.002699999868127634,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.00560000004649434,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.00280000017482962,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.004936598063758464,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.8815353612092965,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 627.4516000935364,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 718.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 630.3064999369781,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 640.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 625.0790000251527,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 593.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 623.1058999555898,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 671.875 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 639.91409999403,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 625 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 629.1714200010574,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 650 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 627.4516000935364,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 640.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 6.580079693437573,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 47.64984588117728 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.010458325798439022,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0733074552018112 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 4011.6362999372086,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4015.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3994.083099859381,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4062.5 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 4105.293600106506,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4109.375 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3984.5074001291323,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4109.375 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3978.6862000703422,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 4109.375 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 4014.841320020515,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 4081.25 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 3994.083099859381,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 4109.375 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 52.08197918983509,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 41.92627457815495 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.012972363049598425,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.010272900356056344 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 3181.3970998355217,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3218.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 3183.2797000731716,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3281.25 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 3174.4639001483392,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3218.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 3175.932600003307,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3250 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 3168.957799933196,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3125 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 3176.806219998707,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3218.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 3175.932600003307,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3218.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 5.7190360561791955,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 58.463396668354235 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.0018002470595079364,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.018163385372692575 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 3.8821000000552885,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 312.203400000044,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 312.5 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 583.0000000059954,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 0 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 38.519899999982954,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 31.25 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3446.689700063871,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3343.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3437.8904999505266,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3515.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3489.9110000733344,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3703.125 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3586.121299880915,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3562.5 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 3453.757100123312,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 3468.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 3482.873920018392,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3518.75 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 3453.757100123312,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3515.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 61.01257452299187,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 131.38014380985922 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.017517882049164067,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.03733716342731345 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2755.3660999590193,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2671.875 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2750.0333999491886,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2796.875 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2772.2507001860777,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2765.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2776.7006001404297,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2703.125 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2779.5040999776575,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2859.375 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 2766.770980042475,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2759.3750000000005 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 2772.2507001860777,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2765.625 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 13.237965369667487,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 74.60835241444666 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.004784626362339632,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.02703813451033174 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}