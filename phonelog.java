import java.io.*;
import java.util.*;

class Solution {
   /**
     * Implement this phone log interface.
     */
    public interface PhoneLog {
        /**
         * Record an incoming call from the caller.
         *
         * @param caller the name of the caller
         * @param duration the duration of the call in seconds
         */
        public void recordIncoming(String caller,
                                   double duration);
        /**
         * Record an outgoing call to the callee.
         *
         * @param callee the name of the callee
         * @param duration the duration of the call in seconds
         */
        public void recordOutgoing(String callee,
                                   double duration);
        /**
         * Find the set of callers or callees with the longest
         * call duration.
         *
         * @return a (possibly empty) set of names
         */
        public Set<String> findLongestCalled();
    }

  
    /* Your code here */
    public class MyPhoneLog implements PhoneLog {
      TreeSet<Caller> calls = new TreeSet<>();

      public void recordIncoming(String caller, double duration) {
        calls.add(new Caller(caller, duration));
      }
      
      public void recordOutgoing(String caller, double duration) {
        calls.add(new Caller(caller, duration));
      }
      
      public Set<String> findLongestCalled() {
        Set<String> set = new HashSet<>();
        set.add(calls.last().name);
        return set;
      }
      
      private class Caller implements Comparable<Caller> {
        private String name;
        private double duration;
        
        Caller(String name, double duration) {
          this.name = name;
          this.duration = duration;
        }

        @Override
        public int compareTo(Caller c) {
          if (duration < c.duration) {
            return -1;
          } else if (duration > c.duration) {
            return 1;
          } else {
            return 0;
          }
        }
      }
    }
  
  
    /**
     * Test case for the phone log.
     *
     * Records several calls and computes the person with the
     * longest single call duration.
     */
    public void testPhoneLog() {

        final long now = System.currentTimeMillis();

        final PhoneLog phoneLog = new MyPhoneLog();

        phoneLog.recordIncoming("Alice", 10.0);
        phoneLog.recordOutgoing("Bob",    9.0);
        phoneLog.recordIncoming("Carol",  5.0);
      
        final Set<String> people = phoneLog.findLongestCalled();

        System.out.println(people);

        assert(people.size() == 1);
        assert(people.contains("Alice"));      
    }

    public static void main(String[] args) {
        new Solution().testPhoneLog();
    }
}