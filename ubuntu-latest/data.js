window.BENCHMARK_DATA = {
  "lastUpdate": 1694821953436,
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
      }
    ]
  }
}