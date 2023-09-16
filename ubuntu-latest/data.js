window.BENCHMARK_DATA = {
  "lastUpdate": 1694822721863,
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
          "id": "6c94320f8526d4421788f15a158a24d5c4589071",
          "message": "Fix pushing",
          "timestamp": "2023-09-16T02:12:51+03:00",
          "tree_id": "69edc9ae584276605d5e61a25f2a17648f0680ca",
          "url": "https://github.com/ahmedihabb2/core/commit/6c94320f8526d4421788f15a158a24d5c4589071"
        },
        "date": 1694819746392,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.7293959999969957,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.7295000000000001 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 61.62015199998905,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 61.0128 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 156.69900000148118,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 156.69999999999573 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 9.88854400000605,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9.380600000000003 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 54.581205000005184,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54.5361 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 146.18510899998682,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 146.1408 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 282.58227099999544,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 282.35949999999997 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 161.1161949999958,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 161.01213333333334 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 146.18510899998682,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 146.1408 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 114.73153237509614,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 114.63744071298578 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.7121042820996308,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.7119801367742831 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 462.9940949999991,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 462.70120000000003 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 688.104678000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 687.0652000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 961.7116979999878,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 957.0349 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 704.2701569999963,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 702.2671 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 688.104678000002,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 687.0652000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 249.75148431788747,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 247.51722174755858 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.3546245454752228,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.35245453154157236 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 834.0299059955498,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 836.7796999999395 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 834.2848719872507,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 838.7944999998092 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 833.2011269930035,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 837.3818000002564 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 838.9243930001555,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 836.2377000003329 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 857.2459840065392,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 837.1846000001941 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 839.5372563964996,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 837.2756600001064 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 834.2848719872507,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 837.184600000194 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 10.149379554288767,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.9552185417063551 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.012089254499380286,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0011408650547732795 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1963.831263006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1873.5234999999998 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1787.5835989975997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1797.4387000000168 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1795.1081699947622,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1806.0896999996744 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1788.6944109988292,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1799.3745999995685 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1796.150746991941,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1806.202100000112 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1826.2736379978264,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1816.5257199998741 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1795.1081699947622,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1806.0896999996742 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 76.99008471220752,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 32.10416568775981 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.04215692714954425,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.017673389005338182 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1651.1059659933096,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1666.2509000010887 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1651.4574129976722,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1666.4351000005447 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1652.3266199999398,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1667.3685000015084 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1654.139703999931,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1669.085999999897 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1649.8661610019383,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1665.142100000491 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1651.7791727985582,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1666.8565200007058 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1651.4574129976722,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1666.4351000005445 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 1.5880929518052889,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1.4761699534911232 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.0009614438648688325,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0008856010915027636 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1516.2167530030501,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 682.4845999999667 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1489.935488998384,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 680.7652999999755 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1487.9338669964,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 678.2796000000546 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 1498.028702999278,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 680.5098333333323 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 1489.935488998384,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 680.7652999999755 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 15.783076216748029,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 2.1141082430509712 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.010535897066022797,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0031066534816924884 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1475.4868609963694,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 661.179900000029 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1471.2195980020226,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 662.2926999999721 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1466.4074230007316,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 659.099400000025 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 1471.0379606663746,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 660.857333333342 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 1471.2195980020226,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 661.1799000000289 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 4.542443469229206,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1.6209035021491482 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.0030879172330614078,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002452728327872774 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.003199999980552093,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.003699999999717818 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0031999999521303835,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0033000000003724494 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0030000000208474376,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.003299999999484271 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.0031333333178433045,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003433333333191513 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.0031999999521303835,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0033000000003724494 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.00011547002236874896,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00023094010755429317 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.03685213498072009,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.06726410899917454 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1543.7805289933237,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1542.2267000000365 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1534.0392819920794,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1535.469100000236 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1589.9318049993667,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1542.1494000000723 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1536.657010985067,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1542.5207999997924 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1541.0083289951046,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1548.3380000002303 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1549.0833911929885,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1542.1408000000733 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1541.0083289951046,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1542.2267000000363 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 23.144437961545776,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 4.5571021904548275 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.01494073081741691,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.002955049364140168 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1401.0217999925203,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1408.9891000001771 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1439.1160869963642,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1413.1342999998058 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1463.436488997047,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1432.100600000716 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1472.1121469979153,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1425.7770999995537 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1508.993604008623,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1463.8044999992453 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1456.936025398494,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1428.7611199998996 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1463.436488997047,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1425.7770999995537 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 40.082767469170946,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 21.698071700053706 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.027511686697573222,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.015186633648076335 ms\nthreads: 1"
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
          "id": "e69021cf6c7c1af4dd9a4597d2c625198789b8ab",
          "message": "Fix pushing",
          "timestamp": "2023-09-16T02:48:52+03:00",
          "tree_id": "e1733babb46629300c2b208c74778d481697bac6",
          "url": "https://github.com/ahmedihabb2/core/commit/e69021cf6c7c1af4dd9a4597d2c625198789b8ab"
        },
        "date": 1694821953010,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.7558029999472637,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.7559999999999998 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 98.77115799997682,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 71.91660000000002 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 181.40000003086243,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 181.89999999999873 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 16.331159999992906,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 15.746099999999998 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 51.81238799997345,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 51.77 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 142.5909160000174,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 142.4865 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 283.953428000018,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 283.12430000000006 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 159.45224400000293,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 159.12693333333334 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 142.5909160000174,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 142.4865 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 116.9854431094651,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 116.57135603682127 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.7336707228119219,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.732568356562442 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 457.7611590000288,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 455.5411 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 715.4471950000243,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 714.7348 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 956.1986680000132,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 952.7565999999998 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 709.8023406666888,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 707.6774999999999 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 715.4471950000243,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 714.7348000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 249.26669629106274,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 248.68286525719836 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.35117761947211473,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3514070537175456 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 776.1631489635192,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 772.0724999999833 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 788.784983995356,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 772.3845000000244 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 748.356858007071,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 743.7159999997198 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 740.1597690069366,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 740.8168999999605 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 766.0465380155301,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 766.1992000004609 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 763.9022595976827,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 759.0378200000298 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 766.0465380155301,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 766.1992000004609 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 19.87110138800967,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 15.540931495606685 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.02601262286941657,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0204745153484 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1722.0679069792482,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1738.959899999933 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1839.4959350106888,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1748.262199999749 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1732.941344999233,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1742.476999999668 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1661.9321310026294,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1687.6889000001531 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1742.4930509849332,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1766.7650999998657 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1739.7860737953465,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1736.830619999874 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1732.941344999233,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1742.4769999996674 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 63.975394303343954,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 29.487616888758716 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.03677198896286226,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.01697783108450774 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1549.5900720081295,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1575.473699999744 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1615.56972997721,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1651.472400001449 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1547.4845199827314,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1572.9640000023437 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1522.7258249957458,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1547.3720000008093 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1610.4603380101707,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1635.2293999993783 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1569.1660969947975,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1596.502300000745 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1549.5900720081295,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1575.473699999744 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 41.43827305268794,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 44.529597267693276 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.026407830969614254,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.02789197188608654 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1684.873535990448,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 712.4282000000006 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1658.4534180031483,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 710.4423999999824 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1650.2171799994017,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 717.2732000000335 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 1664.5147113309995,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 713.3812666666722 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 1658.4534180031485,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 712.4282000000006 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 18.10580598176903,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 3.51371729276507 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.010877528362180137,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00492544093452745 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1586.6667449826082,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 665.0463999999805 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1550.7123140026238,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 654.5580999999463 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1828.082580997318,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 756.3927000001121 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 1655.1538799941834,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 691.9990666666796 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 1586.6667449826082,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 665.0463999999805 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 150.83577824822353,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 56.01255323258505 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.09113096979765631,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0809431051726621 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0034999999911633495,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0029999999995311555 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0027000000386578904,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0025999999992976086 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0025999999593295797,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.00269999999957804 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.0029333333297169397,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002766666666135601 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.0027000000386578904,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00269999999957804 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.0004932882857544173,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00020816660003260325 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.16816646125996823,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.07524093978526306 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1389.3780540065563,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1391.899300000143 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1419.3297419973305,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1417.6959000002068 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1428.0434739628731,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1424.0517000002635 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1492.8366610013768,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1441.5790000000256 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1457.8403389940036,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1441.8839000002688 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1437.485653992428,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1423.4219600001818 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1428.0434739628731,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1424.0517000002635 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 39.40552073917997,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 20.59965873011841 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.027412809741604233,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.014471927024447327 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1285.7937170006153,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1265.8836999996997 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1311.4849389692154,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1313.6203999997545 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1376.1798729981365,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1318.6913999994001 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1815.0283769940074,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1607.0513000001015 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1385.6247310158665,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1365.4134000014685 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1434.8223273955682,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1374.1320400000848 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1376.1798729981365,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1318.6913999994001 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 216.70118781321307,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 134.88923475803435 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.15102998028094552,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.09816322655428805 ms\nthreads: 1"
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
          "id": "85501c8afff157a2518acbd882d97894c9e64014",
          "message": "Remove unneeded steps",
          "timestamp": "2023-09-16T02:57:38+03:00",
          "tree_id": "a597dbe13922e02fa3506e5f60e607fe6668bac1",
          "url": "https://github.com/ahmedihabb2/core/commit/85501c8afff157a2518acbd882d97894c9e64014"
        },
        "date": 1694822444411,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.9815110000204186,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.7589999999999997 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 60.72947699999531,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 59.9708 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 157.60200000158875,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 157.69999999999672 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 9.626607000029708,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9.411700000000009 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 53.457496000021365,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 53.208400000000005 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 142.51179000001457,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 142.5047 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 275.018168000031,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 274.9373 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 156.9958180000223,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 156.8834666666667 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 142.51179000001457,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 142.50469999999999 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 111.48821975707891,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 111.56158824588029 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.7101349652324055,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.7111111872796472 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 451.1759330000018,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 450.85139999999996 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 677.2576559999948,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 671.5025 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 937.458859000003,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 935.1999999999998 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 688.6308159999999,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 685.8512999999999 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 677.2576559999948,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 671.5025 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 243.34087738411276,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 242.4929022189514 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.3533691373232313,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3535648357288984 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 766.4518250147125,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 768.8617999999981 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 773.7133809961847,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 768.9058000000628 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 767.0919000297545,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 764.3008000002407 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 804.2744680315081,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 760.6308000000253 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 760.5128000321315,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 760.3461000002527 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 774.4088748208583,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 764.609060000116 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 767.0919000297545,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 764.3008000002408 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 17.337755230491354,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 4.202445030864244 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.022388373628210348,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.005496200935499778 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1735.0960889978069,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1721.0551000001292 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1773.0969850052816,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1711.8306000000146 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1671.2267370010068,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1700.0089999997901 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1674.543873025982,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1702.477200000586 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1676.7518189878388,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1704.129499999869 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1706.1431006035832,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1707.900280000078 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1676.7518189878388,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1704.1294999998693 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 45.832873680300615,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 8.579009020122493 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.026863440507473434,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.005023132275686553 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1544.3067499926997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1562.344999998027 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1542.5153979863353,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1564.2150999993091 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1544.301494013439,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1563.1271999977762 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1543.5818930090477,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1562.9330000011912 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1545.0849579940495,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1563.8235999989085 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1543.9580985991145,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1563.2887799990424 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1544.301494013439,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1563.1271999977762 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 0.9659459097210468,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.739511556569658 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.000625629614299431,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0004730485921929989 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1568.2962930015947,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 677.4139000000042 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1503.2687940071696,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 676.6130000000124 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1498.0236380028487,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 675.6354999999579 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 1523.1962416705376,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 676.5541333333248 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 1503.2687940071694,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 676.6130000000124 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 39.14573907753145,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.8906602065073169 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.02569973454937039,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0013164655459558124 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1464.008243993817,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 646.1375999998485 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1461.2906610066148,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 645.4238000000116 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1462.6317540032687,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 645.3840000000138 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 1462.6435530012334,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 645.6484666666246 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 1462.6317540032687,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 645.4238000000116 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 1.3588299142669962,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.4240690666815515 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.000929023282178888,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0006568110799843596 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.002999999992425728,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.002799999998970293 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0027999999474559445,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0027999999998584713 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0026999999818144715,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0025000000016817125 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.002833333307232048,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0027000000001701587 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.0027999999474559445,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002799999998970293 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.0001527525327029383,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0001732050794478472 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.05391265909769223,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.06415002942108575 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1448.6327140216417,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1461.486600000007 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1467.4716689763159,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1465.0206999998777 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1463.9757640040898,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1469.3852000000954 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1483.9946469894585,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1469.9963000001644 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1479.3127449721055,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1473.0394000002427 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1468.6775077927223,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1467.7856400000774 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1467.4716689763159,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1469.3852000000957 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 13.902133130049657,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 4.537907064300392 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.009465749326374034,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0030916687972912396 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1318.7958580193708,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1311.3016000005794 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1300.0339459840689,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1311.203499999449 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1305.2733039943405,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1310.5237000012514 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1301.3851409978088,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1310.7180999994732 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1310.5152429933469,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1312.618300000711 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1307.2006983977874,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1311.2730400002927 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1305.2733039943405,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1311.203499999449 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 7.653950446381268,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.8192748002280575 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.005855222121409955,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0006247934451758992 ms\nthreads: 1"
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
          "id": "ef65c05e3932b1ee590dfada258095c03a156702",
          "message": "Remove unneeded steps",
          "timestamp": "2023-09-16T03:02:02+03:00",
          "tree_id": "555053434aa51cee0a813fb5f087ced6e9c39800",
          "url": "https://github.com/ahmedihabb2/core/commit/ef65c05e3932b1ee590dfada258095c03a156702"
        },
        "date": 1694822721487,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.6902049999837345,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.6902999999999996 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 59.395556999987775,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 59.252500000000005 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 152.40099997981815,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 152.49999999999986 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 8.901768000015409,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 8.664100000000008 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 54.23193699999729,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54.20900000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 145.32697300001018,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 145.32610000000003 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 281.33357100000467,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 281.27830000000006 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 160.2974936666707,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 160.27113333333335 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 145.32697300001018,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 145.32610000000003 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 114.28856201799681,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 114.26999722859601 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.7129778476490295,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.7129792798740384 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 461.9275279999897,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 461.91600000000005 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 689.187062000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 688.4658000000002 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 959.6093450000183,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 958.5177 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 703.5746450000033,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 702.9665 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 689.1870620000021,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 688.4658000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 249.15266334428142,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 248.61821099044616 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.35412399397121563,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3536700696127712 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 821.0693620011682,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 826.1289000000004 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 824.81452199508,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 826.4536999996708 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 860.9958269921378,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 826.390200000708 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 817.8975010019087,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 823.6747999988463 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 818.8149649979835,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 824.7411999988375 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 828.7184353976556,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 825.4777599996125 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 821.0693620011682,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 826.1289000000003 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 18.239724634550296,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1.224966768913528 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.02200955578573327,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0014839488454711403 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2034.7418880052999,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1962.0134000001092 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1862.5279210026235,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1873.851000000585 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1862.2841719918029,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1874.1969000001584 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1870.8090200020138,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1883.8540000003707 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1870.993470989589,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1883.9557999999492 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1900.2712943982656,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1895.5742200002344 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1870.8090200020138,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1883.854000000371 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 75.29133549948486,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 37.46799960214118 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.03962136128742943,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.01976604197652389 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1717.6395730057266,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1729.0256000005595 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1724.7154419932542,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1735.8181999996382 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1720.9656939991191,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1732.6748999999886 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1731.6278800018097,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1743.2075999998417 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1715.9577170023397,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1727.3690000001452 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1722.1812612004499,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1733.6190600000348 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1720.965693999119,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1732.6748999999886 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 6.254952372611207,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 6.281538007120813 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.003631994211951406,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0036233669507075485 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1503.3940729994129,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 681.8330999999703 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1489.9975699950403,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 678.6899000000082 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1489.3161969972937,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 675.0035999999724 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 1494.2359466639155,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 678.5088666666503 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 1489.9975699950403,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 678.6899000000082 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 7.938483846038289,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 3.418347168327422 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.0053127378335142,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.005038028736633809 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1511.6516700015836,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 660.6355000000019 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1473.7421680023601,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 656.7988999999859 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1480.4165129998808,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 657.7028000000352 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 1488.6034503346082,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 658.3790666666742 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 1480.4165129998808,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 657.7028000000352 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 20.237392189940746,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 2.005711181454737 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.013594884645331023,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0030464382648274467 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.003199999980552093,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0033000000003724494 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.002999999992425728,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0031999999983156613 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.002900000026784255,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.003199999997427483 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.0030333333332540255,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0032333333320385313 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.002999999992425728,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0031999999983156613 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.00015275250169230717,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000057735028362847006 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.05035796759218713,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.017856194346175438 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1519.3059480108104,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1502.8488000000334 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1511.4082079979028,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1492.0279999998468 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1491.2684229915385,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1492.7327999999127 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1516.3300669964315,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1492.0694999996647 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1532.6472129918898,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1508.541799999561 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1514.1919717977146,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1497.6441799998038 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1516.3300669964315,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1492.7327999999127 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 15.037940035829568,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 7.6253914556080655 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.009931329921116852,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0050915908848315795 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1357.5637039984088,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1364.7869999999677 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1367.086009995461,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1363.7351000001684 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1376.4658880006948,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1374.2862999991737 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1386.5205639934004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1374.822700000884 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1383.503777994406,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1371.4137000009323 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1374.2279887964744,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1369.8089600002252 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1376.4658880006948,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1371.4137000009323 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 11.946360450866637,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 5.240973437143901 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.00869314302158047,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.003826061582443613 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}