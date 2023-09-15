window.BENCHMARK_DATA = {
  "lastUpdate": 1694789152617,
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
          "id": "304fd74f4d2f8de8e825df2f00f6a4b6f36ebab6",
          "message": "Test again",
          "timestamp": "2023-09-15T17:41:38+03:00",
          "tree_id": "0ecc1df5034c13d91ebcf9c12744db9bc1b10188",
          "url": "https://github.com/ahmedihabb2/core/commit/304fd74f4d2f8de8e825df2f00f6a4b6f36ebab6"
        },
        "date": 1694789152612,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.862711000024774,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.8626000000000003 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 74.30696800000192,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 73.38940000000001 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 187.9019999933007,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 188.19999999999948 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 12.575464000008196,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 12.149300000000002 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 61.264097999981004,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 61.252100000000006 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 166.10366399999066,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 166.102 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 321.60978999999656,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 321.56300000000005 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 182.99251733332275,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 182.97236666666663 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 166.10366399999066,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 166.102 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 130.9919648716205,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 130.97289077631046 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.7158323563198887,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.7158069448536608 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 530.711513,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 530.5517000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 818.647363999986,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 793.5756 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1101.8069529999934,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1101.5469999999998 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 817.0552766666598,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 808.5580999999999 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 818.6473639999862,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 793.5756000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 285.55104877018755,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 285.7923453054858 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.34948804190476573,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.35345925704718784 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 898.5385139990569,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 898.2253000000733 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 896.805737990519,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 898.2830000000907 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 898.1061949858429,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 899.2936000000929 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 930.0520929885181,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 905.7582000002045 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 903.3613670020486,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 905.7564000002642 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 905.3727813931971,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 901.4633000001452 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 898.5385139990569,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 899.2936000000927 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 14.018014572026292,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3.942823347627165 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.015483141154801698,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0043738035121635346 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1999.049232999596,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2014.3179999999368 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1989.9882819968582,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2008.5444999998745 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1973.9429809893352,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1997.586500000426 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1981.4337660085073,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2004.7280999992836 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1988.0497259942729,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2010.945800000302 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1986.492797597714,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2007.2245799999648 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1988.0497259942726,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2008.5444999998745 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 9.426003988184286,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 6.423224907721902 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.004745048157024907,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0032000529346457164 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1827.7793580182617,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1849.3728999998727 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1828.7987499981284,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1848.1654999998511 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1834.309331980478,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1855.3477999990946 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1834.8242869967066,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1855.6808000008546 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1832.8195000402445,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1854.7153000000164 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1831.706245406764,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1852.6564599999379 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1832.8195000402443,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1854.7153000000167 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 3.2253508746653408,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3.5909348912465213 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.001760845049665206,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.001938262688618829 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1748.3460269972966,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 795.35550000002 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1730.7503449975457,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 792.4957999999906 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1721.168657998021,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 789.403000000017 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 1733.4216766642876,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 792.4181000000093 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 1730.7503449975457,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 792.4957999999907 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 13.78420676303395,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 2.9770105861009166 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.007952021685548325,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003756868484075366 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1695.5145030038636,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 765.6531000000783 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1746.947432996194,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 765.4451999999967 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1679.4984369958854,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 761.481500000004 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 1707.320124331981,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 764.193266666693 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 1695.5145030038636,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 765.4451999999968 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 35.24019419029681,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 2.3507582699077196 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.020640648281519645,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003076130571211923 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0032999999746152753,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0031999999992038397 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.00310000001491062,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.003399999998876524 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0032000000089738023,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.003700000002382353 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.0031999999994998993,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0034333333334875724 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.0032000000089738023,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003399999998876524 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.00009999997985235088,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00025166114954805333 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.031249993708743453,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.07329936394274204 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1696.9821089993218,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1700.6683999999186 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1751.2532249938317,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1705.6735000002257 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1695.3008930014448,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1705.6979999998543 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1695.1810419868707,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1702.5904999996405 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1689.6514450144764,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1701.3876000006255 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1705.673742799189,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1703.203600000053 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1695.3008930014446,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1702.5904999996405 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 25.6292825924052,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2.3676688965822485 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.01502589970714145,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0013901267567671737 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1560.3475200123285,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1538.308700000023 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1621.0584820150586,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1582.395499999702 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1682.2565360122894,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1612.5498999982 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1530.9494719941483,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1537.8786000009618 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1535.763693006146,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1539.246300002766 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1586.0751406079942,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1562.075800000331 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1560.3475200123285,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1539.246300002766 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 64.62717415946494,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 34.029731776164915 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.040746603048510834,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.02178494268726121 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}